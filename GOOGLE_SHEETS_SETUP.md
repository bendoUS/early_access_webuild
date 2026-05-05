# Google Sheets setup for early access signups

How to wire the early access form to a Google Sheet via Apps Script.

## Step 1: Create the sheet

1. Create a new sheet at [https://sheets.google.com](https://sheets.google.com)
2. Add these headers in row 1:
   - **Column A**: `Full Name`
   - **Column B**: `Email`
   - **Column C**: `Shopify Store URL`
   - **Column D**: `Verified`
   - **Column E**: `Date`

> If you previously had an `Experience` column, rename C to `Shopify Store URL`, add a new `Verified` column in D, and shift `Date` to E.

## Step 2: Apps Script

1. In your sheet, go to **Extensions** → **Apps Script**
2. Replace all existing code with:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }

    Logger.log('Payload: ' + JSON.stringify(data));

    const fullName = data.fullName || '';
    const email = data.email || '';
    const shopifyUrl = (data.shopifyUrl || '').toLowerCase().trim();

    const verified = detectShopify(shopifyUrl);

    sheet.appendRow([
      fullName,
      email,
      shopifyUrl,
      verified,
      new Date()
    ]);

    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      data: { fullName, email, shopifyUrl, verified }
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Returns one of: 'shopify', 'unverified', 'unreachable'
function detectShopify(rawUrl) {
  if (!rawUrl) return 'unverified';

  // *.myshopify.com is auto-trusted
  if (/\.myshopify\.com$/i.test(rawUrl)) return 'shopify';

  const host = rawUrl.replace(/^https?:\/\//i, '').replace(/\/+$/, '').split('/')[0];

  // Try /products.json (default Shopify endpoint)
  try {
    const res = UrlFetchApp.fetch('https://' + host + '/products.json?limit=1', {
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: false
    });
    if (res.getResponseCode() === 200) {
      try {
        const json = JSON.parse(res.getContentText());
        if (json && Array.isArray(json.products)) return 'shopify';
      } catch (_) { /* not JSON */ }
    }
  } catch (_) { /* network error */ }

  // Fallback: check homepage HTML for Shopify signatures
  try {
    const res = UrlFetchApp.fetch('https://' + host, {
      muteHttpExceptions: true,
      followRedirects: true,
      validateHttpsCertificates: false
    });
    const code = res.getResponseCode();
    if (code >= 200 && code < 400) {
      const body = res.getContentText().toLowerCase();
      if (body.indexOf('cdn.shopify.com') !== -1 ||
          body.indexOf('shopify.theme') !== -1 ||
          body.indexOf('"shopify"') !== -1) {
        return 'shopify';
      }
      return 'unverified';
    }
    return 'unreachable';
  } catch (_) {
    return 'unreachable';
  }
}

function testScript() {
  const testData = {
    fullName: 'Test User',
    email: 'test@example.com',
    shopifyUrl: 'teststore.myshopify.com'
  };

  const mockEvent = {
    postData: { contents: JSON.stringify(testData) }
  };

  const result = doPost(mockEvent);
  Logger.log('Test result: ' + result.getContent());
}
```

3. Save (disk icon) and name the project (e.g. "WeBuild Early Access").

## Step 3: Deploy

### ⚠️ Follow this order

1. **Save the script first** (disk icon).

2. **Authorize permissions before deploying**:
   - Click **Run** (▶️) next to any function
   - Pick your Google account
   - **Advanced** → **Go to [project name] (unsafe)**
   - **Allow** every requested permission

3. **Deploy**:
   - Click **Deploy** → **New deployment**
   - Click the gear ⚙️ next to "Select type"
   - Choose **Web app**
   - Configure **EXACTLY**:
     - **Description**: "Early Access API" (optional)
     - **Execute as**: **Me** (your account)
     - **Who has access**: **Anyone** ⚠️ (must be Anyone, not Only myself)
   - Click **Deploy**
   - **Copy the Web App URL** (e.g. `https://script.google.com/macros/s/AKfycby.../exec`)

4. **Whenever you edit the script**:
   - You must redeploy. Either create a new deployment or update the existing one:
     - Deploy → Manage deployments
     - 3 dots → Edit
     - Version: "New version" → Deploy

## Step 4: Environment variable

Edit (or create) `.env` at the project root:

```env
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

## Step 5: Restart dev server

```bash
npm run dev
```

## Test

1. Open the app
2. Click **Get early access**
3. Fill the form (full name, email, Shopify store URL)
4. Check the sheet for a new row

## Row format

Each submit appends one row:

- **A**: Full name
- **B**: Email
- **C**: Shopify store URL (normalized client-side: lowercase, no protocol, no path)
- **D**: Verified status — one of:
  - `shopify` — confirmed Shopify (either `*.myshopify.com` or store responded with Shopify signatures)
  - `unverified` — domain reachable but no Shopify signatures (could be headless, blocked endpoints, or not a Shopify store)
  - `unreachable` — couldn't reach the domain (typo, DNS issue, firewall)
- **E**: Submit timestamp

> Sort by column D to triage. `unverified` and `unreachable` are worth a quick manual look before granting early access.

## Troubleshooting

### 401 Unauthorized in browser console

1. **"Who has access" must be Anyone**:
   - Apps Script → Deploy → Manage deployments → Edit (3 dots) → set "Who has access" to **Anyone** → redeploy

2. **Re-authorize**:
   - Apps Script → Run (▶️) on `testScript` → grant permissions → redeploy

3. **Create a fresh deployment** if updating doesn't take effect:
   - Deploy → New deployment → use the new URL

### Console says "sent" but the sheet stays empty

1. Confirm the deployment is current:
   - Deploy → Manage deployments → version is the latest. If you changed the script, redeploy.

2. Check execution logs:
   - Apps Script → **Executions** (left menu) → click an execution → read `Logger.log` output

3. Run `testScript` manually:
   - Pick `testScript` → Run (▶️) → authorize → check the sheet

4. URL sanity:
   - Must end in `/exec` (not `/dev`)
   - Must be the deployment URL, not the editor URL

5. Active sheet:
   - Script uses `getActiveSpreadsheet().getActiveSheet()`. Make sure the right tab is the active one.

### Wrong column format

Make sure headers match exactly:

- `Full Name` (A)
- `Email` (B)
- `Shopify Store URL` (C)
- `Verified` (D)
- `Date` (E)

## Why this setup

✅ Free, no submission cap
✅ Realtime visibility in the sheet
✅ CSV / Excel export out of the box
✅ No backend to host
✅ No CORS hell (Apps Script handles it)

## Caveats

⚠️ `mode: 'no-cors'` on the client means we can't read the response, but writes still land.
⚠️ One-time setup work in Apps Script.

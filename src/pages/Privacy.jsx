function Privacy() {
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="text-gray-600 mb-8">Last updated: April 21, 2026</p>

      <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
      <p className="text-gray-600 mb-6">
        This Privacy Policy explains how <strong>Webuild</strong> (“the App”,
        “we”, “us”, “our”) collects, uses, and protects information from Shopify
        merchants and their customers when they use our application.
      </p>
      <p className="text-gray-600 mb-6">
        Webuild is a Shopify application designed to help merchants build,
        manage, and optimize their online stores using artificial intelligence.
      </p>

      <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>

      <h3 className="text-lg font-medium mb-2">2.1 Merchant Information</h3>
      <p className="text-gray-600 mb-4">
        When you install Webuild, we may collect the following information:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Store name</li>
        <li>Store owner’s name and email address</li>
        <li>Contact information associated with the store</li>
        <li>Shopify plan and general store settings</li>
        <li>Permissions granted through the Shopify API</li>
      </ul>

      <h3 className="text-lg font-medium mb-2">2.2 Store Data</h3>
      <p className="text-gray-600 mb-6">
        Depending on the features used, Webuild may access products,
        collections, themes, theme settings, pages, and other store content.
        This data is used solely to provide and improve the App’s features.
      </p>

      <h3 className="text-lg font-medium mb-2">2.3 Customer Data</h3>
      <p className="text-gray-600 mb-6">
        Webuild does not intentionally collect sensitive personal data of end
        customers, such as payment details, passwords, or financial information.
        If limited customer data is accessed (such as a name or email address),
        it is used strictly to enable App functionality and is never sold or
        used for external marketing purposes.
      </p>

      <h2 className="text-xl font-semibold mb-2">3. How We Use Information</h2>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>Provide, operate, and improve Webuild</li>
        <li>Generate stores, pages, or content using AI</li>
        <li>Provide customer support and technical assistance</li>
        <li>Fix bugs and improve performance</li>
        <li>Comply with legal and contractual obligations</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">4. Data Sharing and Subprocessors</h2>
      <p className="text-gray-600 mb-4">
        We do not sell, rent, or trade personal data. We share data only with
        the following subprocessors that are required to operate the App, under
        written agreements and only to the extent necessary for the service:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-4">
        <li>
          <strong>Supabase</strong> (PostgreSQL database and object storage)
          stores session tokens, app configuration, bundles, chatbot
          conversations and generated assets. Primary region: United States.
        </li>
        <li>
          <strong>OpenAI</strong> (AI inference) processes text prompts sent to
          the chatbot and generation features. OpenAI does not train its
          foundation models on data submitted through the API.
        </li>
        <li>
          <strong>Intercom</strong> (merchant support messenger) receives the
          store domain and a support identifier when a merchant opens the
          in-app help widget. No end-customer data is sent to Intercom.
        </li>
        <li>
          <strong>Fly.io</strong> (application hosting) runs the Webuild app
          servers and back-end services.
        </li>
        <li>
          <strong>Shopify</strong> remains the data controller for store,
          product, order and customer information accessed through the Shopify
          APIs.
        </li>
      </ul>
      <p className="text-gray-600 mb-6">
        We may also disclose data when required by law or to protect our legal
        rights. The current list of subprocessors may be updated from time to
        time; the latest version is available on this page.
      </p>

      <h2 className="text-xl font-semibold mb-2">5. Data Security</h2>
      <p className="text-gray-600 mb-6">
        We implement appropriate technical and organizational measures to
        protect data, including secure connections (HTTPS), restricted access,
        secure storage, and monitoring against unauthorized access.
      </p>

      <h2 className="text-xl font-semibold mb-2">6. Data Retention</h2>
      <p className="text-gray-600 mb-4">
        We retain data only as long as necessary to provide Webuild services and
        comply with legal obligations. Concrete retention periods:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>
          Session tokens, merchant settings and app-generated content are
          deleted within 30 days after the App is uninstalled.
        </li>
        <li>
          Chatbot conversations and related embeddings are kept for up to 90
          days, then deleted or anonymized.
        </li>
        <li>
          Billing and invoice records are kept for the period required by
          applicable tax and accounting laws (typically up to 10 years).
        </li>
        <li>
          Data covered by Shopify compliance requests is redacted within 30
          days of the request, as required by the mandatory webhooks.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">7. Your Rights</h2>
      <p className="text-gray-600 mb-6">
        Depending on applicable data protection laws, you may have the right to
        access, correct, delete, or restrict the processing of your data.
        Requests can be sent to <strong>hello@getwebuildai.com</strong>.
      </p>

      <h2 className="text-xl font-semibold mb-2">8. Shopify Compliance</h2>
      <p className="text-gray-600 mb-6">
        Webuild complies with the Shopify API License and Terms of Use and the
        Shopify App Store privacy requirements. Data is used strictly within the
        permissions granted by Shopify.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        9. Shopify Mandatory Compliance Webhooks
      </h2>
      <p className="text-gray-600 mb-4">
        As required by the Shopify App Store, Webuild subscribes to and
        responds to the three mandatory privacy webhooks within 30 days of
        receiving the request:
      </p>
      <ul className="list-disc list-inside text-gray-600 mb-6">
        <li>
          <code>customers/data_request</code>: we compile and provide any data
          we hold for the identified customer.
        </li>
        <li>
          <code>customers/redact</code>: we delete any data we hold for the
          identified customer, including chatbot conversations.
        </li>
        <li>
          <code>shop/redact</code>: 48 hours after the merchant uninstalls the
          App, we delete all data associated with the shop, including sessions,
          bundles, generated images, chatbot data and billing metadata.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        10. International Data Transfers
      </h2>
      <p className="text-gray-600 mb-6">
        Webuild is operated from the European Union. Some of our subprocessors
        (Supabase, OpenAI, Intercom, Fly.io) are located in the United States
        or other jurisdictions outside the European Economic Area. When
        personal data is transferred outside the EEA, we rely on the European
        Commission Standard Contractual Clauses (SCCs) or equivalent approved
        transfer mechanisms, and we apply supplementary technical and
        organizational measures where required by law.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        11. Cookies and Tracking
      </h2>
      <p className="text-gray-600 mb-6">
        The Webuild embedded admin app uses first-party session storage strictly
        to authenticate merchants through Shopify session tokens. We do not use
        third-party advertising cookies. The Intercom support messenger, when
        opened by a merchant, sets its own cookies to manage support
        conversations; merchants can close the widget at any time.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        12. Artificial Intelligence Processing
      </h2>
      <p className="text-gray-600 mb-6">
        Certain Webuild features rely on large language models provided by
        OpenAI. Text entered in the store chatbot, product descriptions, theme
        content and similar inputs may be transmitted to OpenAI solely to
        generate a response. Through its API terms, OpenAI commits not to use
        this data to train its foundation models. We recommend that merchants
        and end customers do not enter sensitive personal information into
        these features.
      </p>

      <h2 className="text-xl font-semibold mb-2">13. Changes to This Policy</h2>
      <p className="text-gray-600 mb-6">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mb-2">14. Contact Information</h2>
      <p className="text-gray-600">
        <strong>Webuild</strong>
        <br />
        Email: hello@getwebuildai.com
        <br />
        Website:{" "}
        <a
          href="https://getwebuildai.com"
          className="text-blue-600 underline"
          target="_blank"
          rel="noreferrer"
        >
          https://getwebuildai.com
        </a>
      </p>
    </div>
  );
}

export default Privacy;

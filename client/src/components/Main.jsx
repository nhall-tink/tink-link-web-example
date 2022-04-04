import React, { useState } from "react";
//import { Header } from "./Header";
import { AuthorizationLink } from "./AuthorizationLink";
import { BasicDropdown } from "./BasicDropdown";

export const Main = () => {
  const [market, setMarket] = useState("SE");
  const [locale, setLocale] = useState("en_US");
  return (
    <div>
      <p>Congrats on deploying the demo application! We're almost ready to do something awesome...</p>
      {/* <p>We can help you analyze your financial status.</p>
      <p>
        Or actually we can’t. We’re just a simple example app. But you can
        connect your bank to see your account data, transactions and
        investments!
      </p> */}
      <hr></hr>
      <p><b>Next steps:</b></p>
      <p>To get the demo working, you need to register the redirect URI for our example app
      <p><code>{window.location.href}callback</code></p> in the list of redirect URIs under your <a href='https://console.tink.com/app-settings/client'>app's settings</a></p>
      <hr></hr>
      <h2>Test it out!</h2>
      <p>You're now ready to test out our experience, pick a market and a locale and connect your</p>
      <div style={{ padding: "50px 0 10px 0" }}>
        <BasicDropdown
          name="Choose a market"
          items={[
            "AT",
            "BE",
            "DE",
            "DK",
            "ES",
            "FI",
            "GB",
            "IT",
            "NL",
            "NO",
            "PT",
            "SE"
          ]}
          onSelect={setMarket}
          style={{ marginBottom: "30px" }}
        />
      </div>

      <div style={{ padding: "10px 0 50px 0" }}>
        <BasicDropdown
          name="Choose a locale"
          items={[
            "da_DK",
            "de_DE",
            "en_US",
            "es_ES",
            "fi_FI",
            "fr_FR",
            "it_IT",
            "nl_NL",
            "no_NO",
            "pt_PT",
            "sv_SE"
          ]}
          onSelect={setLocale}
          style={{ marginBottom: "30px" }}
        />
      </div>
      <AuthorizationLink
        scope="accounts:read,investments:read,transactions:read,user:read"
        market={market}
        locale={locale}
      />
      <hr></hr>
      <h2>Share the experience!</h2>
      <p>You can share the App with anyone in your company, to allow them to see the potential power of our companies partnership!</p>
    </div>
    
  );
};

export default Main;

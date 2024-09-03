describe("NADIA", () => {
  it("TR_SCR_001 – Dismantle Order NADIA", () => {
    cy.intercept("POST", "/scone/public/sc/user/preauth").as("userPreAuth");
    cy.intercept("POST", "/scone/public/sc/index/n").as("indexN");
    cy.intercept("POST", "/scone/public/sc/user/auth").as("userAuth");
    cy.intercept("POST", "/scone/public/theme/activateRole").as("activateRole");
    cy.intercept("GET", "/scone/public/retail/user/get-session?_dc=*").as(
      "getSession"
    );
    cy.intercept("GET", "/scone/public/retail/api/get-key-google-map?_dc=*").as(
      "getGoogleMapKey"
    );
    cy.intercept("POST", "/scone/public/retail/user/get-menu").as("getMenu");
    cy.intercept(
      "GET",
      "https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true"
    ).as("mapsGen204");
    cy.intercept(
      "POST",
      "https://maps.googleapis.com/$rpc/google.internal.maps.mapsjs.v1.MapsJsInternalService/GetViewportInfo"
    ).as("getViewportInfo");
    cy.intercept("POST", "/scone/public/retail/api/get-asset?_dc=*").as(
      "getAsset"
    );
    cy.intercept("GET", "/scone/public/retail/api/detail-menu?_dc=*").as(
      "detailMenu"
    );
    cy.intercept("POST", "/scone/public/retail/api/get-customer").as(
      "getCustomer"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-paket-flag").as(
      "cekPaketFlag"
    );
    cy.intercept("POST", "/scone/public/retail/feasibility/get-alpro-sc").as(
      "getAlproSc"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-prediction-data-mo").as(
      "cekPredictionDataMo"
    );
    cy.intercept("POST", "/scone/public/retail/api/info-tagihan").as(
      "infoTagihan"
    );
    cy.intercept("POST", "/scone/public/retail/api/get-customer-profile").as(
      "getCustomerProfile"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-rule-cfu").as(
      "cekRuleCfu"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-paperless-req").as(
      "cekPaperlessReq"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-ppn-req").as(
      "cekPpnReq"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-fiscal").as("cekFiscal");
    cy.intercept(
      "POST",
      "/scone/public/retail/api/cek-quality-Control-after-sales"
    ).as("cekQualityControlAfterSales");
    cy.intercept("POST", "/scone/public/retail/api/get-asset-ont").as(
      "getAssetOnt"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-user-tariff-req").as(
      "cekUserTariffReq"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-on-off-dukcapil").as(
      "cekOnOffDukcapil"
    );
    cy.intercept("POST", "/scone/public/retail/api/check-nd").as("checkNd");
    cy.intercept("GET", "/scone/public/retail/parameter/get-param?_dc=*").as(
      "getParam"
    );
    cy.intercept(
      "POST",
      "/scone/public/retail/package/generate-xml-package"
    ).as("generateXmlPackage");
    cy.intercept("POST", "/scone/public/retail/api/get-data-mesh-wifi").as(
      "getDataMeshWifi"
    );
    cy.intercept("POST", "/scone/public/retail/api/cek-otp-req").as(
      "cekOtpReq"
    );
    cy.intercept(
      "GET",
      "/scone/public/retail/api/generate-csrf-token?_dc=*"
    ).as("generateCsrfToken");
    cy.intercept("GET", "/scone/public/jumunsaengseong.txt?_dc=*").as(
      "jumunsaengseongTxt"
    );
    cy.intercept("GET", "/scone/public/amhohwadeiteo.pem?_dc=*").as("getPem");
    cy.intercept("POST", "/scone/public/retail/ordersc/route?id=*").as(
      "postRoute"
    );
    cy.intercept("POST", "/scone/public/retail/ordersc/load-order").as(
      "loadOrder"
    );
    cy.intercept(
      "GET",
      "/scone/public/retail/ordersc/get-Jenis-Trans?_dc=*"
    ).as("getJenisTrans");
    cy.intercept(
      "GET",
      "/scone/public/retail/api/get-param-paperless?_dc=*"
    ).as("getParamPaperless");
    cy.intercept("POST", "/scone/public/retail/api/get-encrypt-nadia").as(
      "getEncryptNadia"
    );

    cy.visit("https://localhost/scone/public/sc");
    cy.get('input[id="code"]').type("candra_delvano");
    cy.on("window:alert", (alertText) => {
      expect(alertText).to.include("Untuk kelancaran proses Login");
    });
    cy.get('input[id="password"]').type("Feas#4321");
    cy.get('button[id="otpBtn"]').click();
    cy.wait("@userPreAuth").its("response.statusCode").should("eq", 200);
    cy.wait("@indexN").its("response.statusCode").should("eq", 200);
    cy.get('input[id="otp"]').type("1234");
    cy.get('input[id="captcha"]').type("test");
    cy.get('button[id="otpLoginBtn"]').click();
    cy.wait("@userAuth").its("response.statusCode").should("eq", 200);
    ``;
    // ---

    cy.get(".dropdown > .nav-link").click();
    cy.get("#changeUserRole").click();
    cy.get(".dropdown-menu").contains("SCONE - Inputer").click();
    cy.wait("@activateRole").its("response.statusCode").should("eq", 200);
    cy.get(
      ".panel-sidebar > :nth-child(1) > :nth-child(14) > .menu-link"
    ).click();

    // ---

    cy.url().should("include", "/retail.php");
    cy.wait("@getSession").its("response.statusCode").should("eq", 200);
    cy.wait("@getGoogleMapKey").its("response.statusCode").should("eq", 200);
    cy.wait("@getMenu").its("response.statusCode").should("eq", 200);
    cy.wait("@mapsGen204").its("response.statusCode").should("eq", 200);
    cy.wait("@getViewportInfo").its("response.statusCode").should("eq", 200);
    cy.get(".dismissButton").click();
    cy.get("#toolbar-1071-innerCt").contains("Tools").click();
    cy.get("#menu-1029-body").contains("Transaction").click();
    cy.get("#textfield-1151-inputEl").type("127589274297"); // Nomor Internet
    cy.get("#fieldset-1149").contains("Cari").click();
    cy.wait("@getAsset").its("response.statusCode").should("eq", 200);
    cy.wait("@detailMenu").its("response.statusCode").should("eq", 200);
    cy.wait("@getCustomer").its("response.statusCode").should("eq", 200);
    cy.wait("@cekPaketFlag").its("response.statusCode").should("eq", 200);
    cy.wait("@getAlproSc").its("response.statusCode").should("eq", 200);
    cy.wait("@cekPredictionDataMo")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@infoTagihan").its("response.statusCode").should("eq", 200);
    cy.wait("@getCustomerProfile").its("response.statusCode").should("eq", 200);
    cy.wait("@cekRuleCfu").its("response.statusCode").should("eq", 200);
    cy.get("#fieldset-1149").contains("Show Data Masking").click();
    cy.wait("@getCustomer").its("response.statusCode").should("eq", 200);
    cy.get("#ext-gen2011").click();
    cy.get("#boundlist-1812").contains("Deactivation").click();
    cy.wait("@cekPaperlessReq").its("response.statusCode").should("eq", 200);
    cy.wait("@cekPpnReq").its("response.statusCode").should("eq", 200);
    cy.wait("@cekFiscal").its("response.statusCode").should("eq", 200);
    cy.wait("@cekQualityControlAfterSales")
      .its("response.statusCode")
      .should("eq", 200);
    cy.wait("@getAssetOnt").its("response.statusCode").should("eq", 200);
    cy.wait("@cekUserTariffReq").its("response.statusCode").should("eq", 200);
    cy.wait("@cekOnOffDukcapil").its("response.statusCode").should("eq", 200);
    cy.wait("@checkNd").its("response.statusCode").should("eq", 200);
    cy.get("#button-1286-btnInnerEl").click();
    cy.wait("@detailMenu").its("response.statusCode").should("eq", 200);
    cy.wait("@detailMenu").its("response.statusCode").should("eq", 200);
    cy.wait("@getParam").its("response.statusCode").should("eq", 200);
    cy.get("#ext-gen2218").click();
    cy.get("#boundlist-1939")
      .contains("Cman - Pencabutan oleh manajemen")
      .click();
    cy.get("#ext-gen2224").click();
    cy.get("#datepicker-1941-footerEl").contains("Today").click();
    cy.get("#textarea-1933-inputEl").type("Test Remark");
    cy.get("#toolbar-1934-innerCt").contains("Choose").click();
    cy.wait("@generateXmlPackage").its("response.statusCode").should("eq", 200);
    cy.wait("@getDataMeshWifi").its("response.statusCode").should("eq", 200);
    cy.get("#button-1303-btnInnerEl").click();
    cy.get("#button-1952-btnInnerEl").click();

    cy.get("#messagebox-1001").contains("OK").click();

    cy.get('#ext-gen2331').click();
    cy.get('#boundlist-1982').contains("CALL_BY_PHONE").click();
    cy.get('#textarea-1955-inputEl').type("Test Description");
    cy.get('#ext-gen2334').click();
    cy.get("#boundlist-1985-listEl > ul > :nth-child(1)").click();
    cy.get("#textarea-1961-inputEl")
      .clear({ force: true })
      .type("latitude -6.18128549436912; longitude:106,826385871388", {
        force: true,
      });
    cy.get("#toolbar-1975-innerCt").contains("Submit").click();

    cy.get("#messagebox-1001").contains("OK").click();

    cy.get("#button-1304-btnInnerEl").click();
    cy.wait("@getParam").its("response.statusCode").should("eq", 200);
    cy.get("#container-1990-innerCt").find('div[role="button"]').click(); // Perform a click action
    cy.get("#boundlist-2004").contains("147").click();
    cy.get("#textfield-1992-inputEl").type("Test");
    cy.get("#textarea-1998-inputEl").type("Test K-Kontak");
    cy.get("#toolbar-1999-innerCt").contains("Choose").click();

    cy.get("#button-1307-btnInnerEl").click();
    cy.get("#ext-gen2448").click();
    cy.get("#boundlist-2035").contains("MEMBAWA PERANGKAT / HILANG").click();
    cy.get("#textfield-2018-inputEl").type("082118397901");
    cy.get("#textfield-2019-inputEl").type("gemintangsfurqon@gmail.com");
    cy.get("#textarea-2020-inputEl").type(
      "Jl. Baranang Siang No 98B/34B Kosambi"
    );
    cy.get("#ext-gen2451").click();
    cy.get("#boundlist-2037").contains("Index BANDUNG").click();
    cy.get("#toolbar-2031-innerCt").contains("Choose").click();
    cy.get("#toolbar-1792-innerCt").contains("Submit").click();
    cy.wait("@cekOtpReq").its("response.statusCode").should("eq", 200);
    cy.get("#messagebox-1001").contains("Yes").click();
    cy.wait("@generateCsrfToken").its("response.statusCode").should("eq", 200);
    cy.wait("@jumunsaengseongTxt").its("response.statusCode").should("eq", 200);
    cy.wait("@getPem").its("response.statusCode").should("eq", 200);
    cy.wait("@postRoute").its("response.statusCode").should("eq", 200);

    cy.get("#messagebox-1001")
      .contains("OK")
      .click()
      .then(() => {
        cy.contains("Create Order Success!!! Order ID Anda SC")
          .invoke("text")
          .then((text) => {
            const orderId = text.match(/SC(\d+)/)[1];
            cy.get("#toolbar-1071-innerCt").contains("Search").click();
            cy.get("#textfield-1026-inputEl").clear().type(orderId);
          });
      });

    cy.get("#ScBtn-btnInnerEl").click();
    cy.wait("@loadOrder").its("response.statusCode").should("eq", 200);
    cy.wait("@getParam").its("response.statusCode").should("eq", 200);
    cy.wait("@getJenisTrans").its("response.statusCode").should("eq", 200);
    cy.wait("@getParamPaperless").its("response.statusCode").should("eq", 200);
    cy.wait("@getParam").its("response.statusCode").should("eq", 200);
    cy.get("#toolbar-2240-innerCt").contains("Input Serial Number").click();
    cy.wait("@getEncryptNadia").its("response.statusCode").should("eq", 200);
  });
});

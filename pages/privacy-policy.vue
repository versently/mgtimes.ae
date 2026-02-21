
<script setup>
const { t } = useI18n({
  useScope: "local",
});

const localePath = useLocalePath();
const route = useRoute();
// формируем каноникал
const canonicalUrl = `https://mgtimes.ae${route.path}`
useHead({
  title: t("title"),

  meta: [
    {
      name: "description",
      content: t("description"),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
});
</script>
<template>
  <div>
    <div class="news__content">
      <h1 class="news__title">{{ t("Privacy Policy") }}</h1>
      <p class="news__p">
        {{ t("1. TERMS AND DEFINITIONS The company") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("Website –") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("The Privacy Policy of personal") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("PERSONAL INFORMATION OF") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("2.1. Within the framework") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("2.2. This Policy applies") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("2.3. The Company reserves") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("3. PURPOSES OF PROCESSING PERSONAL INFORMATION OF CLIENTS") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("3.1. The Company collects") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("3.2.1. Identification") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("3.2.2. Communication") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("3.2.3. Improving") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("3.2.4. Conducting statistical and other research based on depersonalized data.") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4. TERMS OF PROCESSING") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4.1. The Company") }}
      </p>
      <br />
      <p class="news__p">
         {{ t("4.2. In relation") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4.3. The Company") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4.3.1. The Client has agreed to such actions;") }}</p>
      <br />
      <p class="news__p">
         {{ t("4.3.2. The transfer") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4.3.3. The transfer") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4.3.4. Such transfer") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("4.4. When processing") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("5. MODIFICATION AND DELETION OF PERSONAL INFORMATION. MANDATORY STORAGE DATA") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("5.1. The Client may") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("5.2. The right provided") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("6. MEASURES") }}
      </p>
      <br />
      <p class="news__p">{{ t("6.1. The Company") }}</p>
      <p class="news__p">{{ t("7. CHANGING THE PRIVACY POLICY. APPLICABLE LAW") }}</p>
      <br />
      <p class="news__p">
        {{ t("7.1. The Company") }}
      </p>
      <br />
      <p class="news__p">
        {{ t("7.2. To this Policy") }}
      </p>
      <br />
    </div>
  </div>
</template>



<style scoped>
.news {
  padding-top: 83px;
}

.news__way-block {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 110%;
  letter-spacing: -0.01em;
  color: #909090;
  margin: 50px 0px 60px 0px;
}

.news__way-block a {
  color: #1c1b1b;
}

.news__content {
  max-width: 855px;
  margin: 0px auto;
}

.news__title {
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 56px;
  line-height: 110%;
  letter-spacing: -0.01em;
  color: #1c1b1b;
  margin-bottom: 50px;
}

.news__img-main {
  width: 100%;
}

.news__subtitle {
  font-family: "Lora";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  color: #1c1b1b;
  margin: 50px 0px 32px 0px;
}

.news__p {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #595959;
}

.news__row-small-images {
  margin: 50px 0px 0px 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.news__bold-text {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #1c1b1b;
  margin: 30px 0px 25px 0px;
}

.news__list-item {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #595959;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.news__list-item:not(:last-child) {
  margin-bottom: 10px;
}

.news__list-item::before {
  content: "";
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #9e2220;
  margin: 8px 10px 0px 0px;
}
.news__content {
  padding-top: 100px;
}
@media (max-width: 767px) {
  .news__content {
    padding-top: 50px;
  }
  .news__title {
    font-size: 27px;
    margin-bottom: 30px;
  }
}
</style>
<i18n lang="json">
  {
    "en": {
      "title": " Elite escort Privacy Policy - MGTimes",
      "description": "MGTIMES Privacy Policy. For any questions please contact us!",
      "Privacy Policy": "Privacy Policy",
      "1. TERMS AND DEFINITIONS The company": "1. TERMS AND DEFINITIONS The company – MGTIMES, which carries out entrepreneurial activity in the organization of elite recreation. Client – any individual who has accepted (accepted) a public offer, posted on the Website.",
      "Website –": "Website – https://mgtimes.ae . Contract – a contract for the provision of paid services, concluded between the Company and the Client, through acceptance (acceptance) The Client of the public offer posted on the Website.",
      "The Privacy Policy of personal": "The Privacy Policy of personal Information (hereinafter referred to as the Policy) applies to all information that the Company may receive about The Client while using the Site. Using the Site means the Client's unconditional consent to this Policy and the terms specified therein the terms of processing of his personal information; in case of disagreement with by these terms, the Client must refrain from using the Site.",
      "PERSONAL INFORMATION OF": "PERSONAL INFORMATION OF THE CLIENT, WHICH IS PROCESSED BY THE COMPANY",
      "2.1. Within the framework": "2.1. Within the framework of this Policy, personal information is understood as personal information that the Client provides about himself independently in the process of using the Site, including personal Customer data, as well as identification, financial, payment, account and contact details. Mandatory information to provide marked in a special way. Other information is provided by the Client at his discretion.",
      "2.2. This Policy applies": "2.2. This Policy applies only to information processed in during the use of the Site, does not control and is not responsible for the processing of information by third-party sites to which the Client can follow the links available on the Site, including in the results search.",
      "2.3. The Company reserves": "2.3. The Company reserves the right to verify the accuracy personal information provided by the Client. However, The Company assumes that the Client provides reliable and 2 sufficient information and keeps this information up to date condition.",
      "3. PURPOSES OF PROCESSING PERSONAL INFORMATION OF CLIENTS": "3. PURPOSES OF PROCESSING PERSONAL INFORMATION OF CLIENTS",
      "3.1. The Company collects": "3.1. The Company collects and stores only that personal information, which is necessary for the proper provision of services in accordance with the provisions of the public offer posted on the Website. 3.2. Personal The Company processes the Client's information for the following purposes:",
      "3.2.1. Identification": "3.2.1. Identification of the party within the framework of the conclusion of the Contract;",
      "3.2.2. Communication": "3.2.2. Communication with the Client, including sending notifications, requests and information concerning the terms of the Contract, as well as processing requests and requests from the Client;",
      "3.2.3. Improving": "3.2.3. Improving the quality of the Site, the convenience of its use;",
      "3.2.4. Conducting statistical and other research based on depersonalized data.": "3.2.4. Conducting statistical and other research based on depersonalized data.",
      "4. TERMS OF PROCESSING": "4. TERMS OF PROCESSING OF PERSONAL INFORMATION OF CLIENTS AND ITS TRANSFER TO THIRD PARTIES",
      "4.1. The Company": "4.1. The Company stores Clients' personal information in accordance with legal requirements.",
      "4.2. In relation": "4.2. In relation to the Client's personal information, its confidentiality, except in cases of voluntary provision by the Client information about yourself for general access to an unlimited number of people.",
      "4.3. The Company": "4.3. The Company has the right to transfer the Client's personal information to third parties in the following cases:",
      "4.3.1. The Client has agreed to such actions;": "4.3.1. The Client has agreed to such actions;",
      "4.3.2. The transfer": "4.3.2. The transfer is necessary for the fulfillment of the terms of the Contract with the Client;",
      "4.3.3. The transfer": "4.3.3. The transfer is provided for by Russian or other applicable by law within the framework of the procedure established by law;",
      "4.3.4. Such transfer": "4.3.4. Such transfer takes place as part of a sale or other transfer business (in whole or in part), while all of them pass to the acquirer obligations to comply with the terms of this Policy in relation to personal information received by him;",
      "4.4. When processing": "4.4. When processing personal data of Clients, the Company is guided by Federal Law of the Russian Federation No. 152-FZ of July 27, 2006 «About personal data».",
      "5. MODIFICATION AND DELETION OF PERSONAL INFORMATION. MANDATORY STORAGE DATA": "5. MODIFICATION AND DELETION OF PERSONAL INFORMATION. MANDATORY STORAGE DATA",
      "5.1. The Client may": "5.1. The Client may change (update, supplement) the information provided by him personal information or part of it.",
      "5.2. The right provided": "5.2. The right provided for in clause 5.1. of this Policy may be limited in accordance with legal requirements. In particular, such restrictions may include the Company's obligation to maintain the information changed or deleted by the Client for the period established by legislation, and transfer such information in accordance with by a legally established procedure to a state body.",
      "6. MEASURES": "6. MEASURES APPLIED TO PROTECT THE CLIENT'S PERSONAL INFORMATION",
      "6.1. The Company": "6.1. The Company takes the necessary and sufficient organizational and technical measures to protect the Client's personal information from unauthorized or accidental access, destruction, modification, blocking, copying, distribution, as well as from other illegal actions of third parties with it, including measures for safe data transmission using modern encryption methods.",
      "7. CHANGING THE PRIVACY POLICY. APPLICABLE LAW": "7. CHANGING THE PRIVACY POLICY. APPLICABLE LAW",
      "7.1. The Company": "7.1. The Company has the right to make changes to this Policy confidentiality. When making changes in the current edition the date of the last update is indicated. The new version of the Policy enters effective from the moment of its placement, unless otherwise provided by the new editorial Policy.",
      "7.2. To this Policy": "7.2. To this Policy and the relationship between the Client and the Company, arising in connection with the application of the Privacy Policy, subject to application of the law of the Uae."

    },
    "ru": {
      "title": "Элитный эскорт - политика конфиденциальности - MGTimes",
      "description": "MGTIMES - Политика конфиденциальности. По любым вопросам, пожалуйста, обращайтесь к нам!",
       "Privacy Policy": "Политика конфиденциальности",
       "1. TERMS AND DEFINITIONS The company": "1. ТЕРМИНАЛЫ И ОПРЕДЕЛЕНИЯ Компания – MGTIMES, осуществляющая предпринимательскую деятельность в организации элитного отдыха. Клиент – любое физическое лицо, принявшее (принявшее) публичное предложение, размещенное на Веб-сайте.",
       "Website –": "Веб-сайт – https://mgtimes.ae. Договор – договор на оказание платных услуг, заключенный между Компанией и Клиентом путем принятия (акцепта) Клиентом публичной оферты, размещенной на Веб-сайте.",
       "The Privacy Policy of personal": "Политика конфиденциальности персональных данных (далее именуемая Политика) распространяется на всю информацию, которую Компания может получить о Клиенте при использовании Сайта. Использование Сайта означает безусловное согласие Клиента с настоящей Политикой и указанными в ней условиями, условиями обработки его персональных данных; в случае несогласия с настоящими условиями, Клиент должен воздержаться от использования Сайта.",
       "PERSONAL INFORMATION OF": "Персональные данные клиента, обрабатываемые компанией.",
       "2.1. Within the framework": "2.1. В рамках настоящей Политики под персональной информацией понимается персональная информация, которую Клиент предоставляет о себе самостоятельно в процессе использования Сайта, включая персональные данные Клиента, а также идентификационные, финансовые, платежные, учетные и контактные данные. Обязательная информация для предоставления отмечена специальным образом. Другая информация предоставляется Клиентом по его усмотрению.",
       "2.2. This Policy applies": "2.2. Настоящая Политика применяется только к информации, обрабатываемой при использовании Сайта, не контролирует и не несет ответственности за обработку информации сторонними сайтами, на которые Клиент может перейти по ссылкам, доступным на Сайте, в том числе в результатах поиска.",
       "2.3. The Company reserves": "2.3. Компания оставляет за собой право проверять достоверность предоставленной Клиентом персональной информации. Однако Компания исходит из того, что Клиент предоставляет достоверную и достаточную информацию и поддерживает эту информацию в актуальном состоянии.",
       "3. PURPOSES OF PROCESSING PERSONAL INFORMATION OF CLIENTS": "3. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ КЛИЕНТОВ",
       "3.1. The Company collects": "3.1. Компания собирает и хранит только ту персональную информацию, которая необходима для надлежащего оказания услуг в соответствии с положениями публичной оферты, размещенной на Сайте. 3.2. Персональную информацию Клиента Компания обрабатывает в следующих целях:",
       "3.2.1. Identification": "3.2.1. Идентификации стороны в рамках заключения Договора;",
       "3.2.2. Communication": "3.2.2. Связи с Клиентом, включая направление уведомлений, запросов и информации, касающихся условий Договора, а также обработки запросов и обращений от Клиента;",
       "3.2.3. Improving": "3.2.3. Улучшения качества Сайта, удобства его использования;",
       "3.2.4. Conducting statistical and other research based on depersonalized data.": "3.2.4. Проведения статистических и иных исследований на основе обезличенных данных.",
       "4. TERMS OF PROCESSING": "4. УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ КЛИЕНТОВ И ЕЕ ПЕРЕДАЧИ ТРЕТЬИМ ЛИЦАМ",
       "4.1. The Company": "4.1. Компания хранит персональную информацию Клиентов в соответствии с требованиями законодательства.",
       "4.2. In relation": "4.2. В отношении персональной информации Клиента сохраняется ее конфиденциальность, кроме случаев добровольного предоставления Клиентом информации о себе для общего доступа неограниченному кругу лиц.",
       "4.3. The Company": "4.3. Компания имеет право передавать персональную информацию Клиента третьим лицам в следующих случаях:",
       "4.3.1. The Client has agreed to such actions;": "4.3.1. Клиент выразил согласие на такие действия;",
       "4.3.2. The transfer": "4.3.2. Передача необходима для исполнения условий Договора с Клиентом;",
       "4.3.3. The transfer": "4.3.3. Передача предусмотрена российским или иным применимым законодательством в рамках установленной законодательством процедуры;",
       "4.3.4. Such transfer": "4.3.4. Такая передача осуществляется в рамках продажи или иной передачи бизнеса (полностью или частично), при этом к приобретателю переходят все обязательства по соблюдению условий настоящей Политики в отношении полученной им персональной информации;",
       "4.4. When processing": "4.4. При обработке персональных данных Клиентов Компания руководствуется Федеральным законом Российской Федерации от 27 июля 2006 г. № 152-ФЗ «О персональных данных».",
       "5. MODIFICATION AND DELETION OF PERSONAL INFORMATION. MANDATORY STORAGE DATA": "5. ИЗМЕНЕНИЕ И УДАЛЕНИЕ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ. ОБЯЗАТЕЛЬНОЕ ХРАНЕНИЕ ДАННЫХ",
       "5.1. The Client may": "5.1. Клиент может изменить (обновить, дополнить) предоставленную им персональную информацию или ее часть.",
       "5.2. The right provided": "5.2. Право, предусмотренное п. 5.1. настоящей Политики, может быть ограничено в соответствии с требованиями законодательства. В частности, такие ограничения могут предусматривать обязанность Компании сохранить измененную или удаленную Клиентом информацию на срок, установленный законодательством, и передать такую информацию в соответствии с установленной законодательством процедурой государственному органу.",
       "6. MEASURES": "МЕРЫ, ПРИМЕНЯЕМЫЕ ДЛЯ ЗАЩИТЫ ПЕРСОНАЛЬНОЙ ИНФОРМАЦИИ КЛИЕНТОВ",
       "6.1. The Company":  "6.1. Компания принимает необходимые и достаточные организационные и технические меры для защиты персональной информации Клиента от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц, включая меры по безопасной передаче данных с использованием современных методов шифрования.",
       "7. CHANGING THE PRIVACY POLICY. APPLICABLE LAW": "7. ИЗМЕНЕНИЕ ПОЛИТИКИ КОНФИДЕНЦИАЛЬНОСТИ. ПРИМЕНИМОЕ ЗАКОНОДАТЕЛЬСТВО",
       "7.1. The Company": "7.1. Компания имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в действующей редакции указывается дата последнего обновления. Новая редакция Политики вступает в силу с момента ее размещения, если иное не предусмотрено новой редакцией Политики.",
       "7.2. To this Policy": "7.2. К настоящей Политике и отношениям между Клиентом и Компанией, возникающим в связи с применением Политики конфиденциальности, подлежит применению законодательство ОАЭ."

    }
  }  
  </i18n>
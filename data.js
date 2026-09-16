// Shared identity fields reused verbatim across screens (About, Resume) — kept
// in one place so the contact address, location, and LinkedIn URL don't drift.
// "river nate" on the homepage is a stylized handle, intentionally separate.
const RN_IDENTITY={
  name:'Nathan Mills',
  contactEmail:['contact','rivernate.com'].join('@'),
  location:'salt lake city',
  linkedin:'https://www.linkedin.com/in/nathan-mills/'
};
window.RN_DATA={
posts:[],
projects:[],
identity:RN_IDENTITY,
resume:{
  name:RN_IDENTITY.name,
  tagline:'backend & infrastructure engineer · engineering team lead',
  summary:'~19 years of backend and infrastructure engineering, the last 14+ in ed-tech (since Nov 2012) — cloud infrastructure, data platforms, and standards work (LTI, OpenID Connect).',
  email:RN_IDENTITY.contactEmail,
  experience:[
    {
      company:'Derivita',
      dates:'Jan 2022 — Present',
      titles:[{title:'Engineering Team Lead',dates:'Jan 2022 — Present'}],
      bullets:[
        'Led the transition to Terraform-based infrastructure as code on GCP — reusable modules, remote state, and Atlantis automation — migrating existing infrastructure progressively rather than in a single cutover.',
        'Built the education-standards platform (Cloud Storage, Typesense, Apache Beam) that powers standards publishing, search, crosswalks, tagging, and reporting across customer environments.',
        'Led a multi-engineer rollout of LTI 1.3 with grade passback, establishing it as the preferred production integration while keeping LTI 1.1 compatibility for existing customers.',
        'Built a PR launcher using CI-published Docker images and local Docker Compose orchestration, cutting PR-environment startup to roughly 30 seconds and removing the need for lengthy local Bazel builds.',
        'Primary technical implementer of GCP access, monitoring, logging, patching, and backup controls under CTO direction, supporting the company’s first SOC 2 Type II audit; continued remediation through Sprinto and cloud security automation.',
        'Established reusable Cloud Run + Cloud Deploy delivery workflows adopted by other application teams, reducing duplicated deployment code by about 62% across the first two migrations and centralizing deployment and security controls.',
        'Designed and implemented Gatekeeper, a centralized identity service providing tenant-scoped SSO, account linking, sessions, roles, and OAuth/OIDC across the product suite.',
        'In progress: primary owner of a Firestore-to-BigQuery CDC and backfill platform, and of a SQLMesh + Dagster/BigQuery transformation platform replacing a legacy Dataform pipeline — both aimed at hourly-or-faster analytics in place of costly full nightly exports; neither has cut over yet.',
        'Built a GCP-native RAG platform (ingestion, retrieval, generation, bulk processing, observability) for education-standards matching, used for Texas and possibly Virginia standards before it was deliberately decommissioned.',
        'Built a shared, centrally-maintained GitHub Actions CI/CD and security workflow platform adopted org-wide.',
        'Built reusable org-wide repository-governance automation — rulesets, CODEOWNERS, automerge, and immutable action pinning.',
        'Joint contributor on PRism, a shared engineering workflow platform for AI-assisted code review used by other engineers.'
      ]
    },
    {
      company:'Instructure',
      dates:'Nov 2012 — Jan 2022',
      titles:[
        {title:'Software Engineering Manager',dates:'Jun 2021 — Jan 2022'},
        {title:'Sr. Software Engineer',dates:'Jun 2019 — Jun 2021'},
        {title:'Development Team Lead',dates:'Feb 2018 — Jun 2019'},
        {title:'Software Engineer',dates:'Nov 2012 — Feb 2018'}
      ],
      bullets:[
        'Improved the speed and reliability of a Pulsar cluster running on EKS, handling peaks of 300k msgs/sec and 670 Mb/s.',
        'Built a Pulsar source using Debezium for change data capture from Postgres, with customizations that significantly increased throughput.',
        'Refactored an AWS Kinesis/Lambda event-processing service for webhook delivery, taking it from a ceiling of roughly 500K events/min to handling 1M events/min.',
        'Worked with IMS Global to modernize LTI’s auth from OAuth 1 to OpenID Connect — contributing technically and helping build workgroup consensus for the standard.',
        'As team lead, managed a team of 5 developers and 1 intern, providing technical mentorship and handling team HR matters while continuing to contribute code.'
      ]
    },
    {
      company:'ContentWatch',
      dates:'Jun 2007 — Nov 2012',
      titles:[{title:'Software Engineer',dates:'Jun 2007 — Nov 2012'}],
      bullets:[
        'Designed and implemented synchronization and management services for Net Nanny across multiple devices and platforms, including a web app for managing installation settings.',
        'Designed and implemented a RESTful API with OAuth2 authentication using Spring, Redis, and RabbitMQ.',
        'Built an Android app that rooted the device and installed a kernel module for web traffic analysis.'
      ]
    }
  ],
  education:[
    {
      school:'Weber State University',
      place:'Ogden, UT',
      degree:'B.S. Computer Science — Magna Cum Laude',
      dates:'Spring 2013',
      detail:'3.80 GPA (institution)'
    }
  ],
  awards:[
    {name:'1EdTech / IMS Global Leadership Award',dates:'2017, 2018, 2019',detail:'for contributions to LTI and LTI Advantage'}
  ],
  skills:[
    {group:'languages',items:['Go','TypeScript / JavaScript','Python','Scala']},
    {group:'cloud (GCP)',items:['Cloud Run','Cloud Deploy','BigQuery','Cloud Storage','Firestore','GKE','Artifact Registry','IAM']},
    {group:'cloud (AWS, earlier)',items:['EKS','Kinesis','Lambda']},
    {group:'infrastructure as code',items:['Terraform','Atlantis']},
    {group:'data & pipelines',items:['Apache Beam','Dagster','SQLMesh','Pulsar','Debezium (CDC)','Typesense']},
    {group:'ci/cd & build',items:['GitHub Actions','self-hosted Kubernetes runners','Docker','Docker Compose','Bazel']},
    {group:'orchestration',items:['Kubernetes','Helm','ArgoCD']},
    {group:'auth & identity',items:['OAuth2','OIDC','LTI 1.1 / 1.3','SSO']},
    {group:'databases & frontend',items:['PostgreSQL','Redis','React']},
    {group:'security & compliance',items:['SOC 2 Type II controls','cloud security posture automation']},
    {group:'previously used',items:['Ruby','Java','Spring','RabbitMQ','Android']}
  ]
}};

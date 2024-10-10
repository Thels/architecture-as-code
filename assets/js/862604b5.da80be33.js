"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38],{9328:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Welcome to CALM","href":"/architecture-as-code/","docId":"home","unlisted":false},{"type":"category","label":"Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"What is CALM?","href":"/architecture-as-code/introduction/what-is-calm","docId":"introduction/what-is-calm","unlisted":false},{"type":"link","label":"Why Use CALM?","href":"/architecture-as-code/introduction/why-use-calm","docId":"introduction/why-use-calm","unlisted":false},{"type":"link","label":"Key Features","href":"/architecture-as-code/introduction/key-features","docId":"introduction/key-features","unlisted":false}],"href":"/architecture-as-code/introduction/"},{"type":"category","label":"Core Concepts","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Nodes","href":"/architecture-as-code/core-concepts/nodes","docId":"core-concepts/nodes","unlisted":false},{"type":"link","label":"Interfaces","href":"/architecture-as-code/core-concepts/interfaces","docId":"core-concepts/interfaces","unlisted":false},{"type":"link","label":"Relationships","href":"/architecture-as-code/core-concepts/relationships","docId":"core-concepts/relationships","unlisted":false},{"type":"link","label":"Metadata","href":"/architecture-as-code/core-concepts/metadata","docId":"core-concepts/metadata","unlisted":false}],"href":"/architecture-as-code/core-concepts/"},{"type":"category","label":"Working with CALM","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Installation","href":"/architecture-as-code/working-with-calm/installation","docId":"working-with-calm/installation","unlisted":false},{"type":"link","label":"Using the CLI","href":"/architecture-as-code/working-with-calm/using-the-cli","docId":"working-with-calm/using-the-cli","unlisted":false},{"type":"link","label":"Generate","href":"/architecture-as-code/working-with-calm/generate","docId":"working-with-calm/generate","unlisted":false},{"type":"link","label":"Validate","href":"/architecture-as-code/working-with-calm/validate","docId":"working-with-calm/validate","unlisted":false},{"type":"link","label":"Visualize","href":"/architecture-as-code/working-with-calm/visualize","docId":"working-with-calm/visualize","unlisted":false}],"href":"/architecture-as-code/working-with-calm/"}]},"docs":{"core-concepts/core-concepts-index":{"id":"core-concepts/core-concepts-index","title":"Core Concepts","description":"Welcome to the Core Concepts section of CALM. This section provides a comprehensive understanding of the primary components that make up CALM, including nodes, interfaces, relationships, and metadata. By mastering these concepts, you can effectively define and manage your software architecture using CALM.","sidebar":"docsSidebar"},"core-concepts/interfaces":{"id":"core-concepts/interfaces","title":"Interfaces","description":"Interfaces in CALM are used to define how nodes interact with each other. They specify the points of connection between nodes, detailing the available endpoints, communication methods, and security parameters. By defining interfaces, you can establish clear, consistent ways in which components of your architecture connect and communicate.","sidebar":"docsSidebar"},"core-concepts/metadata":{"id":"core-concepts/metadata","title":"Metadata","description":"Metadata in CALM provides a way to capture additional information that doesn\'t fit neatly into nodes or relationships. This flexibility allows architects to extend the model with custom data that can drive specific tools, processes, or analyses.","sidebar":"docsSidebar"},"core-concepts/nodes":{"id":"core-concepts/nodes","title":"Nodes","description":"Nodes are one of the core elements of the CALM schema, representing the individual components that make up your architecture. If you were to sketch your system on a whiteboard, nodes would be the \\"boxes\\" that represent people, systems, services, databases, or networks.","sidebar":"docsSidebar"},"core-concepts/relationships":{"id":"core-concepts/relationships","title":"Relationships","description":"Relationships in CALM define how nodes interact, connect, or depend on each other. They are the \\"arrows\\" in architectural diagrams that illustrate data flows, control flows, dependencies, and system interactions.","sidebar":"docsSidebar"},"home":{"id":"home","title":"Welcome to CALM","description":"The Common Architecture Language Model (CALM) is an open-source specification developed by the Architecture as Code (AasC) community under FINOS. CALM enables software architects to define, validate, and visualize system architectures in a standardized, machine-readable format, bridging the gap between architectural intent and implementation.","sidebar":"docsSidebar"},"introduction/introduction-index":{"id":"introduction/introduction-index","title":"Introduction","description":"Welcome to the Introduction section of CALM. Here, you will find an overview of the Common Architecture Language Model (CALM), its purpose, and its core features. This section will help you understand the motivation behind CALM and how it can bring consistency, automation, and control to your software architecture.","sidebar":"docsSidebar"},"introduction/key-features":{"id":"introduction/key-features","title":"Key Features","description":"CALM is designed to revolutionize how we define, validate, and visualize software architectures. Below are some of the core features that make CALM a powerful tool for modern architects.","sidebar":"docsSidebar"},"introduction/what-is-calm":{"id":"introduction/what-is-calm","title":"What is CALM?","description":"The Common Architecture Language Model (CALM) is an open-source specification developed by the Architecture as Code (AasC) community under FINOS. CALM provides a standardized, machine-readable, and human-readable format for defining software architectures. By capturing architecture as code, CALM enables a consistent, version-controlled approach that aligns design intent with implementation, fostering better collaboration and automation in software development.","sidebar":"docsSidebar"},"introduction/why-use-calm":{"id":"introduction/why-use-calm","title":"Why Use CALM?","description":"Software architecture often suffers from disconnection between design and implementation. Traditional approaches, such as whiteboard sketches or static diagrams in tools like Visio, lack standardization, version control, and validation, making it difficult to ensure that what is designed is what is built. CALM (Common Architecture Language Model) addresses these issues by bringing architecture into the world of code\u2014structured, consistent, and automated.","sidebar":"docsSidebar"},"working-with-calm/generate":{"id":"working-with-calm/generate","title":"Generate","description":"The generate command allows you to create an instantiation of an architecture from a predefined CALM pattern. This command helps you quickly set up the structure of your architecture using reusable patterns, which can then be customized to fit your specific needs.","sidebar":"docsSidebar"},"working-with-calm/installation":{"id":"working-with-calm/installation","title":"Installation","description":"To start using CALM, you need to install the CALM Command Line Interface (CLI). The CLI allows you to interact with CALM\'s schema, enabling you to generate, validate, and visualize your architectural definitions.","sidebar":"docsSidebar"},"working-with-calm/using-the-cli":{"id":"working-with-calm/using-the-cli","title":"Using the CLI","description":"The CALM CLI provides a set of commands that allow you to interact with CALM\u2019s architecture model. This section will cover the basics of using the CLI, including accessing help, understanding command structure, and common options.","sidebar":"docsSidebar"},"working-with-calm/validate":{"id":"working-with-calm/validate","title":"Validate","description":"The validate command is used to check if an instantiation conforms to a given CALM pattern. Validation helps ensure that your architecture adheres to best practices and meets the required standards.","sidebar":"docsSidebar"},"working-with-calm/visualize":{"id":"working-with-calm/visualize","title":"Visualize","description":"The visualize command allows you to create visual representations of your architecture directly from CALM definitions. This command produces an SVG file that visually depicts the nodes and relationships defined in your architecture.","sidebar":"docsSidebar"},"working-with-calm/working-with-calm-index":{"id":"working-with-calm/working-with-calm-index","title":"Working with CALM","description":"This section will guide you through the practical aspects of using CALM to define, validate, and visualize your software architecture. From installing the CLI to understanding the key commands, you\u2019ll learn how to integrate CALM into your workflow effectively.","sidebar":"docsSidebar"}}}}')}}]);
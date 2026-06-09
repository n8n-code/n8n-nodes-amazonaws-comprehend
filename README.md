# @n8n-dev/n8n-nodes-amazonaws-comprehend

![amazonaws-comprehend Banner](banner.svg)

[![npm version](https://img.shields.io/npm/v/@n8n-dev/n8n-nodes-amazonaws-comprehend.svg)](https://www.npmjs.com/package/@n8n-dev/n8n-nodes-amazonaws-comprehend)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

**Stop writing amazonaws-comprehend API integrations by hand.**

Every time you connect n8n to amazonaws-comprehend, you waste hours mapping endpoints, defining parameters, and debugging schemas. You copy-paste from docs, fix edge cases, and pray nothing breaks.

**What if connecting n8n to amazonaws-comprehend took 5 minutes, not half a day?**

This node gives you **1+ resources** out of the box: **Default**: with full CRUD operations, typed parameters, and zero manual configuration.

---

## What You Get

- **Zero boilerplate**: Resources, operations, and fields are pre-configured and ready to use
- **Full CRUD**: Create, read, update, and delete support where the API allows it
- **Typed parameters**: No more guessing field types
- **Built-in auth**: API key authentication, ready to go
- **Declarative**: Native n8n performance, no custom execute() overhead

---

## Install

```bash
npm install @n8n-dev/n8n-nodes-amazonaws-comprehend
```

**Or in n8n:**
1. **Settings → Community Nodes → Install**
2. Search: `@n8n-dev/n8n-nodes-amazonaws-comprehend`
3. Click **Install**

---

## Quick Start

1. Install the node (above)
2. Add credentials: **amazonaws-comprehend API** → paste your API key
3. Drag the **amazonaws-comprehend** node into your workflow
4. Pick a resource → pick an operation → done.

That's it. No configuration files. No code. It just works.

---

## Resources

<details>
<summary><b>Default</b> (84 operations)</summary>

- Post Batch Detect Dominant Language
- Post Batch Detect Entities
- Post Batch Detect Key Phrases
- Post Batch Detect Sentiment
- Post Batch Detect Syntax
- Post Batch Detect Targeted Sentiment
- Post Classify Document
- Post Contains Pii Entities
- Post Create Dataset
- Post Create Document Classifier
- Post Create Endpoint
- Post Create Entity Recognizer
- Post Create Flywheel
- Post Delete Document Classifier
- Post Delete Endpoint
- Post Delete Entity Recognizer
- Post Delete Flywheel
- Post Delete Resource Policy
- Post Describe Dataset
- Post Describe Document Classification Job
- Post Describe Document Classifier
- Post Describe Dominant Language Detection Job
- Post Describe Endpoint
- Post Describe Entities Detection Job
- Post Describe Entity Recognizer
- Post Describe Events Detection Job
- Post Describe Flywheel
- Post Describe Flywheel Iteration
- Post Describe Key Phrases Detection Job
- Post Describe Pii Entities Detection Job
- Post Describe Resource Policy
- Post Describe Sentiment Detection Job
- Post Describe Targeted Sentiment Detection Job
- Post Describe Topics Detection Job
- Post Detect Dominant Language
- Post Detect Entities
- Post Detect Key Phrases
- Post Detect Pii Entities
- Post Detect Sentiment
- Post Detect Syntax
- Post Detect Targeted Sentiment
- Post Import Model
- Post List Datasets
- Post List Document Classification Jobs
- Post List Document Classifier Summaries
- Post List Document Classifiers
- Post List Dominant Language Detection Jobs
- Post List Endpoints
- Post List Entities Detection Jobs
- Post List Entity Recognizer Summaries
- Post List Entity Recognizers
- Post List Events Detection Jobs
- Post List Flywheel Iteration History
- Post List Flywheels
- Post List Key Phrases Detection Jobs
- Post List Pii Entities Detection Jobs
- Post List Sentiment Detection Jobs
- Post List Tags For Resource
- Post List Targeted Sentiment Detection Jobs
- Post List Topics Detection Jobs
- Post Put Resource Policy
- Post Start Document Classification Job
- Post Start Dominant Language Detection Job
- Post Start Entities Detection Job
- Post Start Events Detection Job
- Post Start Flywheel Iteration
- Post Start Key Phrases Detection Job
- Post Start Pii Entities Detection Job
- Post Start Sentiment Detection Job
- Post Start Targeted Sentiment Detection Job
- Post Start Topics Detection Job
- Post Stop Dominant Language Detection Job
- Post Stop Entities Detection Job
- Post Stop Events Detection Job
- Post Stop Key Phrases Detection Job
- Post Stop Pii Entities Detection Job
- Post Stop Sentiment Detection Job
- Post Stop Targeted Sentiment Detection Job
- Post Stop Training Document Classifier
- Post Stop Training Entity Recognizer
- Post Tag Resource
- Post Untag Resource
- Post Update Endpoint
- Post Update Flywheel

</details>

---

## Why This Node?

**Without this node:**
- Hours of manual API integration
- Copy-pasting from amazonaws-comprehend docs
- Debugging auth, pagination, error handling
- Maintaining your own client code

**With this node:**
- Install → configure → use. 5 minutes.
- Auto-generated from the official amazonaws-comprehend OpenAPI spec
- Always up to date when the API changes
- Native n8n performance

---

## Auto-Generated
This node was auto-generated from the official **amazonaws-comprehend** OpenAPI specification using
[@n8n-dev/n8n-openapi-node-ultimate](https://github.com/kelvinzer0/n8n-openapi-node-ultimate),
then validated against the live API so you get accurate types and real parameters, not guesswork.

When the amazonaws-comprehend API updates, this node updates too.

---

## Support This Project

If this node saved you hours of work, consider supporting continued development, new APIs, better error handling, and faster updates.

[![Keep It Moving.](https://crypto-donate.insidexofficial.workers.dev/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0/badge)](https://n8n-code.github.io/membership/#/eyJ0aXRsZSI6IktlZXAgSXQgTW92aW5nIiwiZGVzYyI6Ik9uZSBkZXZlbG9wZXIgYnVpbHQgYSB0b29sIHRoYXQgYXV0by1nZW5lcmF0ZXNcbm44biBub2RlcyBmcm9tIGFueSBPcGVuQVBJIHNwZWMuXG5cbllvdXIgZG9uYXRpb24gZnVuZHMgbmV3IGZlYXR1cmVzLCBtb3JlIEFQSSBzdXBwb3J0LFxuYW5kIGJldHRlciB0b29saW5nIGZvciBldmVyeSBkZXZlbG9wZXIgYWZ0ZXIgeW91LiIsInRhcmdldCI6NTAwMCwiYWRkcmVzc2VzIjp7ImV0aGVyZXVtIjoiMHhmMDU1NWQ0MGRiRkI0ZTNCZjA3MDQ0MjgyQjc4RjJmRTFmNTFFZjcyIiwic29sYW5hIjoiNlpEVk5BYmpZZExEcXo4cGt3VUNHYllaNVV3QlFranB0QzU1Wk5vTFcybVUifSwiZGlzY29yZCI6Imh0dHBzOi8vZGlzY29yZC5nZy9wdERaOGU0aDkzIn0)

---

## License

MIT © [kelvinzer0](https://github.com/n8n-code)

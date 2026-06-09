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

| Resource | Operations |
|----------|------------|
| Default | Post batch detect dominant language, Post batch detect entities, Post batch detect key phrases, Post batch detect sentiment, Post batch detect syntax, Post batch detect targeted sentiment, Post classify document, Post contains pii entities, Post create dataset, Post create document classifier, Post create endpoint, Post create entity recognizer, Post create flywheel, Post delete document classifier, Post delete endpoint, Post delete entity recognizer, Post delete flywheel, Post delete resource policy, Post describe dataset, Post describe document classification job, Post describe document classifier, Post describe dominant language detection job, Post describe endpoint, Post describe entities detection job, Post describe entity recognizer, Post describe events detection job, Post describe flywheel, Post describe flywheel iteration, Post describe key phrases detection job, Post describe pii entities detection job, Post describe resource policy, Post describe sentiment detection job, Post describe targeted sentiment detection job, Post describe topics detection job, Post detect dominant language, Post detect entities, Post detect key phrases, Post detect pii entities, Post detect sentiment, Post detect syntax, Post detect targeted sentiment, Post import model, Post list datasets, Post list document classification jobs, Post list document classifier summaries, Post list document classifiers, Post list dominant language detection jobs, Post list endpoints, Post list entities detection jobs, Post list entity recognizer summaries, Post list entity recognizers, Post list events detection jobs, Post list flywheel iteration history, Post list flywheels, Post list key phrases detection jobs, Post list pii entities detection jobs, Post list sentiment detection jobs, Post list tags for resource, Post list targeted sentiment detection jobs, Post list topics detection jobs, Post put resource policy, Post start document classification job, Post start dominant language detection job, Post start entities detection job, Post start events detection job, Post start flywheel iteration, Post start key phrases detection job, Post start pii entities detection job, Post start sentiment detection job, Post start targeted sentiment detection job, Post start topics detection job, Post stop dominant language detection job, Post stop entities detection job, Post stop events detection job, Post stop key phrases detection job, Post stop pii entities detection job, Post stop sentiment detection job, Post stop targeted sentiment detection job, Post stop training document classifier, Post stop training entity recognizer, Post tag resource, Post untag resource, Post update endpoint, Post update flywheel |

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

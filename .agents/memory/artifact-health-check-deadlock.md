---
name: Artifact workflow health check deadlock
description: restart_workflow always fails DIDNT_OPEN_A_PORT for artifact-backed workflows in this pnpm monorepo; the server IS running but the proxy deadlock prevents confirmation.
---

## The rule
`restart_workflow` and `configureWorkflow` always return `DIDNT_OPEN_A_PORT` for artifact-backed workflows in this environment, even when the server clearly starts and responds to HTTP requests (confirmed by curl).

**Why:** The health check goes through the Replit proxy (`https://xxx.replit.dev/`). The proxy only routes to an artifact when its workflow is "healthy". But the workflow only becomes "healthy" when the health check passes. Classic chicken-and-egg deadlock. Standalone workflows have the same issue.

**Confirmed working:** Logs show Jekyll building, Vite starting on port 6000, Jekyll watch rebuilding, and Vite sending `page reload` events to browsers — all during the health check window. The servers ARE running. The proxy just can't reach them.

**How to apply:**
- Don't spend time debugging `DIDNT_OPEN_A_PORT` for this project — it's environmental, not a code bug.
- The Replit platform (user-side) starts workflows correctly when the workspace loads.
- Verify correctness by checking workflow logs (they show the actual server output), not by relying on restart_workflow success.
- Use `refresh_all_logs` to confirm the server started and is serving.

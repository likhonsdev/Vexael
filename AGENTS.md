# Vexael Agent Instructions

This document provides guidelines for AI agents working on the Vexael codebase.

## Project Overview

Vexael is a modular agent system for autonomous task execution. The goal is to create a reliable and extensible system. Please adhere to the existing architecture and coding conventions.

## Development Guidelines

1.  **Modularity:** Keep agents and modules loosely coupled. Each component should have a clear and specific responsibility.
2.  **Configuration:** Do not commit sensitive information. Use `.env` files for configuration and provide examples in `.env.example`.
3.  **Testing:** All new features must be accompanied by tests. Run existing tests to ensure no regressions are introduced.
4.  **Documentation:** Keep documentation up-to-date. Add comments to your code where necessary to explain complex logic.
5.  **Dependencies:** When adding new dependencies, justify their inclusion and update `package.json`.

## Agent-Specific Instructions

-   **coreAgent:** This is the central orchestrator. Changes to this agent should be made with extreme care.
-   **subtaskAgent:** These agents are spawned by the core agent. Ensure they can operate independently.
-   **automationAgent:** These agents interact with external systems. Ensure they are robust and handle errors gracefully.
-   **learningAgent:** This agent is responsible for improving the system. It should not have side effects on the core functionality.

By following these guidelines, we can ensure that Vexael remains a high-quality, maintainable, and scalable project.

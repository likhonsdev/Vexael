# Vexael

Vexael is built around a modular agent system, enabling autonomous reasoning, task execution, and collaboration. Each agent can operate independently or as part of a workflow. tackles bugs, small feature requests, and other software engineering tasks,

## Agent Architecture

- **Core Agent:** Handles high-level task management, reasoning, and execution.
- **Subtask Agents:** Dynamically spawned to manage complex workflows.
- **Automation Agents:** Execute scripts, interact with web pages, or manage APIs.
- **Learning Agents:** Monitor outcomes and adapt future strategies.

## Workflow

1. **Task Analysis:** The agent evaluates the incoming task for complexity and required resources.
2. **Planning:** Generate a structured plan using agentic logic and reasoning chains.
3. **Execution:** Run the tasks autonomously, using code, automation, or browser interactions.
4. **Subtask Generation:** Break down large tasks into manageable subtasks.
5. **Monitoring & Learning:** Track execution, successes, and errors; adjust strategy.
6. **Output Storage:** Save results and logs for auditing, reuse, or sharing.

## Features

- **Autonomy:** Agents operate with minimal human intervention.
- **Agentic Logic:** Decisions are made based on structured reasoning chains.
- **Integration:** Agents can interact with codebases, APIs, and browser environments.
- **Collaboration:** Multiple agents can work together or share outputs for team use.
- **Extensibility:** New agents can be added without affecting core workflows.
- **Security:** Agents manage credentials and scripts securely.

## Example Use Case

1. **Task:** Generate a GitHub Gist with AI-generated code.
2. **Execution:** Core agent plans subtasks, sub-agents generate code, automation agents commit and push to Gist.
3. **Monitoring:** Learning agent tracks success and adapts future generation logic.
4. **Output:** The resulting Gist is stored, logged, and optionally shared with collaborators.

Vexael agents are designed to **scale, adapt, and operate reliably**, making them ideal for developer-centric autonomous workflows.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/vexael.git
   ```
2. Install NPM packages:
   ```sh
   npm install
   ```
3. Create a `.env` file from the example:
   ```sh
   cp .env.example .env
   ```
4. Add your environment variables to the `.env` file.

### Usage
```sh
npm start
```

### Running Tests
```sh
npm test
```

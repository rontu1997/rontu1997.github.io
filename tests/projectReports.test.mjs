import test from 'node:test';
import assert from 'node:assert/strict';

import { agenticAIReport, polymerReport } from '../src/data/projectReports.ts';
import { cloudContainerReports } from '../src/data/cloudContainerReports.ts';

test('published reports replace the generic project placeholders', () => {
  assert.equal(polymerReport.status, 'published');
  assert.equal(polymerReport.title, 'Polymer Framework Builder');
  assert.equal(polymerReport.metrics.automatedTests, '111 passing');
  assert.equal(agenticAIReport.status, 'published');
});

test('Agentic AI presents both documented agents as published case studies', () => {
  assert.equal(agenticAIReport.agents.length, 2);

  const gromacsAgent = agenticAIReport.agents.find(
    (agent) => agent.slug === 'gromacs-simulation-agent',
  );
  const researchAgent = agenticAIReport.agents.find(
    (agent) => agent.slug === 'ai-research-agent',
  );

  assert.equal(gromacsAgent?.status, 'published');
  assert.equal(gromacsAgent?.verifiedExample?.system, '1AKI lysozyme');
  assert.equal(gromacsAgent?.verifiedExample?.production, '1 ns');
  assert.equal(researchAgent?.status, 'published');
  assert.equal(researchAgent?.modes.length, 2);
});

test('the Agentic AI report contains no coming-soon agent', () => {
  const comingSoonItems = agenticAIReport.agents.filter(
    (agent) => agent.status === 'coming-soon',
  );

  assert.deepEqual(comingSoonItems, []);
});

test('cloud containers cover all three reported tools with documented evidence', () => {
  assert.deepEqual(
    cloudContainerReports.map((report) => report.id),
    ['gromacs-container', 'acpype-container', 'autodock-container'],
  );
  assert.ok(cloudContainerReports.every((report) => report.evidence.length > 0));
});

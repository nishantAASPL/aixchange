import ProjectIQVisual from '../components/visuals/ProjectIQVisual';
import ResourceFinderVisual from '../components/visuals/ResourceFinderVisual';
import AbstractPlaceholder1 from '../components/visuals/AbstractPlaceholder1';
import AbstractPlaceholder2 from '../components/visuals/AbstractPlaceholder2';
import AbstractPlaceholder3 from '../components/visuals/AbstractPlaceholder3';

export const agents = [
  {
    id: 'projectiq',
    title: "ProjectIQ",
    headline: "Intelligent agent for project knowledge retrieval",
    description: "Intelligent project management assistant. Analyzes requirements, estimates timelines, and suggests resource allocation.",
    tags: ['Management', 'Analytics'],
    visual: ProjectIQVisual,
    builtOn: 'Copilot Studio',
    dataAccess: [
      'PMO SharePoint project library',
      'Project plans and timelines',
      'Resource allocation spreadsheets',
      'Risk registers and status reports'
    ],
    canHelpWith: [
      'Retrieve project status and timeline information',
      'Identify resource bottlenecks and allocation issues',
      'Surface critical risk items and mitigation plans',
      'Answer questions about ongoing PMO initiatives'
    ],
    accessPoints: ['Microsoft Teams', 'Microsoft 365']
  },
  {
    id: 'resource',
    title: "Resource Finder",
    headline: "Semantic talent discovery and skill matching engine",
    description: "Semantic search engine for internal talent and assets. Instantly locate team members with specific skills.",
    tags: ['Search', 'HR'],
    visual: ResourceFinderVisual,
    builtOn: 'Copilot Studio',
    dataAccess: [
      'HR SharePoint profiles',
      'Employee skill databases',
      'Organizational structure and hierarchy',
      'Project assignment history'
    ],
    canHelpWith: [
      'Find talent by specific technical or domain skills',
      'Locate team members for cross-functional projects',
      'Query organizational charts and reporting lines',
      'Discover expertise across the company'
    ],
    accessPoints: ['Microsoft Teams', 'SharePoint intranet']
  },
  {
    id: 'docbuilder',
    title: "DocBuilder",
    headline: "Automatic documentation and architecture record generation",
    description: "Automates the generation of technical documentation and architectural decision records from codebase commits.",
    tags: ['DevOps', 'Docs'],
    visual: AbstractPlaceholder1,
    builtOn: 'Azure AI Studio',
    dataAccess: [
      'GitHub and Azure DevOps repositories',
      'Commit history and pull request metadata',
      'Architecture decision records',
      'Existing codebase documentation'
    ],
    canHelpWith: [
      'Generate architectural decision records (ADRs)',
      'Create API documentation from code',
      'Summarize code changes for release notes',
      'Maintain consistent documentation standards'
    ],
    accessPoints: ['VS Code extension', 'DevOps pipelines']
  },
  {
    id: 'aaxon',
    title: "AAxon",
    headline: "Neural policy assistant for enterprise governance and compliance",
    description: "Centralized neural-net assistant for querying internal HR, IT compliance policies, and organizational charts instantly.",
    tags: ['HR', 'Compliance'],
    visual: AbstractPlaceholder2,
    builtOn: 'Copilot Studio',
    dataAccess: [
      'HR policies SharePoint library',
      'IT compliance and security wiki',
      'Organizational charts and structures',
      'Policy amendment history and changelogs'
    ],
    canHelpWith: [
      'Answer HR and compensation policy questions',
      'Provide IT security and compliance guidance',
      'Navigate organizational structure and reporting',
      'Retrieve current policy and procedure documentation'
    ],
    accessPoints: ['Microsoft Teams', 'Intranet portal']
  },
  {
    id: 'datasync',
    title: "DataSync",
    headline: "Intelligent ETL monitoring and anomaly detection platform",
    description: "Automated ETL pipeline assistant that monitors data integrity and highlights anomalies across departmental silos.",
    tags: ['Data', 'ETL'],
    visual: AbstractPlaceholder3,
    builtOn: 'Azure AI Studio',
    dataAccess: [
      'SQL Server databases and data warehouses',
      'Power BI datasets and reports',
      'ETL pipeline execution logs',
      'Data quality metrics and SLAs'
    ],
    canHelpWith: [
      'Detect data anomalies and quality issues',
      'Monitor ETL pipeline health and performance',
      'Query cross-departmental data insights',
      'Alert on data integrity violations'
    ],
    accessPoints: ['Power BI', 'Teams alerts and notifications']
  },
  {
    id: 'coderev',
    title: "CodeRev",
    headline: "Intelligent code review and quality assurance agent",
    description: "Pre-review agent that analyzes pull requests against enterprise security, styling guidelines, and performance metrics.",
    tags: ['Security', 'Dev'],
    visual: ProjectIQVisual,
    builtOn: 'Azure AI Studio',
    dataAccess: [
      'GitHub and Azure DevOps pull requests',
      'Enterprise security policy documents',
      'Code style and linting configuration',
      'Performance benchmarks and baselines'
    ],
    canHelpWith: [
      'Perform security vulnerability scanning',
      'Flag style and formatting violations',
      'Identify performance regressions',
      'Suggest architectural improvements'
    ],
    accessPoints: ['GitHub Actions', 'Azure DevOps Pipelines']
  }
];

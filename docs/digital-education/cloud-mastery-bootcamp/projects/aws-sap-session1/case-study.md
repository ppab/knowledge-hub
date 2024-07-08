# AWS SAP-Session 1 Case Study

# Company Overview

GlobalTech Inc. is a rapidly growing international technology company specializing in software
development and cloud-based solutions. The company has its headquarters in the USA and
operates in over 15 countries.

## Business Objectives

- To ensure robust security, compliance, and efficient resource management across all
  departments.
- To maintain agility and innovation in software development and deployment.
- To optimize costs and operational efficiency in cloud resource utilization.

## Current Infrastructure

GlobalTech Inc. uses a single AWS account for its cloud operations and employs Microsoft
Active Directory as its primary identity store. The current setup presents challenges in cost
tracking, security policy enforcement, and resource management.

## Project Overview

GlobalTech Inc. seeks to re-architect its AWS environment using a multi-account strategy to
improve security, governance, and operational efficiency.

### Technical Requirements

- Segregation of environments (development, testing, production).
- Centralized management of multiple AWS accounts.
- Integration with Microsoft Active Directory for SSO.
- Centralized logging and auditing with immutable settings.
- Long-term retention of logs and audit trails (minimum 7 years).
- Efficient resource and access management across accounts.

### Compliance and Regulatory Requirements

- Compliance with international data protection laws (e.g., GDPR, HIPAA).
- Regular, tamper-proof auditing and reporting capabilities.

### Scalability and Performance Requirements

- Scalable architecture to support international expansion.
- High-performance computing resources for data-intensive applications.

### Budget Constraints

- Cost-effective solutions for managing multiple accounts.
- Detailed cost tracking and optimization mechanisms.

### Operational Requirements

- Centralized logging and monitoring for all AWS accounts.
- Streamlined disaster recovery and high availability strategies.

## Expected Deliverables

1) Proposed Architecture Diagram
   A detailed architecture diagram illustrating the multi-account setup, including account structure
   (e.g., master account, security account, logging account, individual workload accounts).
2) Service Selection Justification
   Explanation for the choice of AWS services such as AWS Organizations, AWS Control Tower,
   AWS CloudTrail, AWS Config, Amazon CloudWatch, and AWS Budgets.
3) Cost Estimation
   A preliminary cost analysis for the proposed multi-account architecture.
4) Security and Compliance Strategy
   Security measures, IAM policies, SCPs, and encryption strategies. Detailing the approach to
   prevent tampering and ensure long-term data retention.
5) Disaster Recovery and High Availability Strategy
   Approach for ensuring business continuity across multiple regions.
6) Mock Data
   Sample organizational units (OUs), SCPs, account names, and resource types for a realistic
   scenario.

## Evaluation Criteria

- Alignment with GlobalTech Inc.'s business objectives and technical requirements.
- Innovation and efficiency in the proposed architecture.
- Effectiveness of security, compliance, and governance strategies.
- Cost-effectiveness and scalability of the solution.
- Clarity and completeness of the architecture diagram and justifications.
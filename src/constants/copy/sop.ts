import { IMAGES } from "../links";

const copy = {
    title: "BRC20 Protocol Maintenance",
    author: {
        img: "/android-chrome-144x144.png",
        name: "L1F",
        description: "Standard operating procedure",
    },
    date: "March 6, 2024",
    readtime: "5 min",
    image: IMAGES.sop.desktop,

    phases: [
        {
            title: "Phase 0: Roles and Responsibilities",
            purpose:
                "To establish clear and effective operational structures within BRC-20 by distinctly assigning roles and responsibilities, ensuring smooth collaboration and decision-making processes.",
            actions: [
                "Role Definition: First determine key roles such as Maintainers, Oversight Committee, and Community Spokesmen.",
                "Clarify Responsibilities: Detail the Maintainers' duties in protocol development and maintenance, define the Oversight Committee's supervisory role, and outline Community Spokesmen's tasks in representing the community and facilitating communication.",
            ],
        },
        {
            title: "Phase 1: Ideation and Innovation",
            purpose:
                "To cultivate a rich environment for creative thinking and development of ideas within the BRC-20 framework.",
            actions: [
                "Idea Generation Forums: Continue hosting L1F discourse forums and promote them as a place for submitting ideas or suggestions, allowing for continuous innovation input from the community.",
                "Pull Requests: For more technical implementation ideas, allow developers to submit pull requests to the open-source repositories.",
                "Cross-Functional Collaboration: Encourage collaborative ideation by actively partnering with teams who are keen on implementing features/modules, ensuring a blend of diverse perspectives and expertise in the development process.",
            ],
        },
        {
            title: "Phase 2: Strategic Alignment and Assessment",
            purpose:
                "To ensure that all proposed innovations are in harmony with the guiding pillars of the BRC-20 protocol.",
            actions: [
                "Assessment Against Guiding Pillars: Every proposal is rigorously evaluated for its alignment with the core pillars of the BRC-20 protocol. This includes examining how the innovation contributes to the protocol's long-term vision and values.",
                "Communication of Intent: Utilize L1F forums for transparent communication. The intent, potential benefits, and considerations of each proposal will be communicated in these forums, inviting open discussions and feedback from the broader community. This step ensures community engagement and understanding of the direction and rationale behind each innovation.",
            ],
        },
        {
            title: "Phase 3: Oversight and Decision-Making",
            purpose:
                "To provide an adjudication layer that ensures proposed innovations are strategically viable and adhere to the protocol's standards.",
            actions: [
                "Regular Review Meetings: Convene regular sessions with an oversight committee, comprising essential stakeholders like protocols or indexers, to assess and decide on proposals. The committee's role is primarily observational, intervening actively only in instances of clear deviation from established standards.",
                "Transparent Decision-Making Process: Document and communicate the rationale behind each decision to maintain transparency and stakeholder trust.",
                "Impact Analysis Execution: Carry out a comprehensive analysis to evaluate the potential impacts of proposed changes, ensuring that benefits are maximized for the broader BRC20 community.",
                "Roles and Responsibilities: Define the roles and responsibilities of each partner and entity in the process.",
            ],
        },
        {
            title: "Phase 4: Development and Implementation",
            purpose:
                "To turn approved ideas into tangible updates or features for the BRC-20 protocol, ensuring technical excellence and compatibility.",
            actions: [
                "Development Guidelines: Set forth detailed guidelines and best practices for the development of new features or updates.",
                "Phased Development Approach: Implement innovations in small stages to manage risks and allow for iterative improvement.",
                "Progress Communication: Regularly update the community and stakeholders about development progress, challenges, and milestones.",
                "Open-Source Transparency: Document and release all updates and new features in an open-source format, promoting transparency and community collaboration in the BRC-20 ecosystem.",
            ],
        },
        {
            title: "Phase 5: Testing and Validation",
            purpose:
                "To rigorously evaluate new developments for functionality, security, and user experience.",
            actions: [
                "Testing Strategy: Implement a multi-level testing strategy.",
                "Validation: Use block balance state hashes to provide alternative indexers to validate their implementation against the reference client. Changes must be accompanied by a validation hash to ensure integrity and traceability.",
                'Testnet: Standup a testnet environment where new modules or features can be integrated and battle-tested. An idea could be that all modules are automatically "white" in testnet.',
                "Feedback Integration: Utilize test phase feedback for thoughtful optimization and improvement of features, preparing for smooth full-scale deployment with oversight committee acknowledgment.",
            ],
        },
        {
            title: "Phase 6: Launch and Integration",
            purpose:
                "To successfully integrate and launch new features or updates into the BRC-20 ecosystem with minimal disruption.",
            actions: [
                "Clear Rollout Strategy: Plan the rollout of new features in a controlled and well-communicated manner to ensure stability and readiness. Communications teams from key partners to collaborate on rollouts as needed.",
                "Performance Monitoring: Closely monitor the performance and user reception of new features post-launch to identify and address any issues. Use tools like The Bitcoin Oracle to monitor divergence across indexers.",
                "User Support and Documentation: Provide comprehensive support and detailed documentation to assist users or protocols relying on BRC-20 in adapting to new features or updates.",
            ],
        },
        {
            title: "Phase 7: Continuous Improvement Cycle",
            purpose:
                "To ensure the SOP remains flexible and dynamic to adapt to evolving technologies and user needs, while also providing a clear pathway for new collaborators to engage and contribute.",
            actions: [
                "Quarterly SOP Review: Conduct a thorough quarterly review of the SOP to identify areas for improvement or update. Can expand to annual once a steady state has been obtained.",
                "Contributor Pathway: Make sure there is a pathway for key contributors of the open-source project to earn further responsibility in the development process.",
                "Record Keeping.: Develop standardized templates for proposals, impact assessments, and feedback, along with a detailed directory of partner contacts to facilitate clear and efficient project documentation.",
            ],
        },
    ],
};

export default copy;

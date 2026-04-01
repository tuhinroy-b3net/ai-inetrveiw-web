import React from 'react'
import styles from "./terms.module.css"
import Link from 'next/link'

const page = () => {
    return (

        <div className={styles.wrapper}><span><i className="fa fa-arrow-circle-left" aria-hidden="true"></i> <Link href="/">Home</Link></span>
            <h1><u>Terms of Use for Ai-interview-copilot</u> </h1>
            <h3>Effective Date: 31/03/2026</h3>

            <p><strong>1. Acceptance of Terms</strong></p>
            <p>By accessing or using Ai-interview-copilot ("we," "our," or "the app"), you agree to be bound by these Terms of Use. If you do not agree, please do not use the application.</p>

            <p><strong>2. Eligibility</strong></p>
            <p>You must be at least 13 years old to use this app. By using the app, you confirm that you meet this requirement.</p>

            <p><strong>3. User Account</strong></p>
            <p>To access certain features, you may be required to sign in.</p>
            <p>You agree to:</p>
            <ul>
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your login credentials</li>
                <li>Be responsible for all activities under your account</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>

            <p><strong>4. Description of Service</strong></p>
            <p>Ai-interview-copilot is an AI-powered interview preparation platform where:</p>
            <ul>
                <li>Users select their preferences or topics</li>
                <li>AI generates multiple-choice and subjective questions</li>
                <li>Users submit answers</li>
                <li>AI evaluates responses and provides feedback</li>
            </ul>
            <p>The content generated is for practice purposes only and should not be considered professional or hiring advice.</p>

            <p><strong>5. Acceptable Use</strong></p>
            <p>You agree not to:</p>
            <ul>
                <li>Use the app for any unlawful purpose</li>
                <li>Attempt to reverse engineer or exploit the AI system</li>
                <li>Submit harmful, abusive, or misleading content</li>
                <li>Interfere with the app’s functionality or security</li>
            </ul>

            <p><strong>6. AI-Generated Content Disclaimer</strong></p>
            <p>The questions and evaluations provided by the AI are automated and may not always be accurate or complete.</p>
            <p>We do not guarantee:</p>
            <ul>
                <li>Correctness of questions or answers</li>
                <li>Hiring outcomes or interview success</li>
            </ul>
            <p>Use the feedback as guidance only.</p>

            <p><strong>7. Intellectual Property</strong></p>
            <p>All content, features, and functionality of the app (excluding user-generated content) are owned by Ai-interview-copilot and are protected by applicable laws.</p>
            <p>You retain ownership of your responses, but grant us a limited license to use them for:</p>
            <ul>
                <li>Providing the service</li>
                <li>Improving the platform</li>
            </ul>

            <p><strong>8. Termination</strong></p>
            <p>We may suspend or terminate your access if:</p>
            <ul>
                <li>You violate these Terms</li>
                <li>We are required to do so by law</li>
                <li>The service is discontinued</li>
            </ul>
            <p>You may stop using the app at any time.</p>

            <p><strong>9. Limitation of Liability</strong></p>
            <p>To the fullest extent permitted by law, Ai-interview-copilot shall not be liable for:</p>
            <ul>
                <li>Any indirect or consequential damages</li>
                <li>Loss of data or opportunities</li>
                <li>Decisions made based on AI-generated feedback</li>
            </ul>

            <p><strong>10. Changes to the Terms</strong></p>
            <p>We may update these Terms of Use from time to time. Continued use of the app after changes means you accept the updated terms.</p>

            <p><strong>11. Governing Law</strong></p>
            <p>These Terms shall be governed by and interpreted in accordance with the laws of India.</p>

            <p><strong>12. Contact Information</strong></p>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>Email: mobixed@gmail.com</p>

            <hr />
            <p><strong>By using Ai-interview-copilot, you acknowledge that you have read and understood these Terms of Use.</strong></p>
        </div>
    )
}

export default page
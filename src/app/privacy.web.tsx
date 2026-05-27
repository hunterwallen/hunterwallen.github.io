import {
	LegalContact,
	LegalLayout,
	LegalList,
	LegalParagraph,
	LegalSection,
} from '@/components/legal-doc'

export default function PrivacyScreen() {
	return (
		<LegalLayout
			title="Privacy Policy"
			lastUpdated="May 27, 2026"
			intro={
				<>
					<LegalParagraph>
						This Privacy Policy describes how Hunter Wallen (&ldquo;the
						App&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
						handles information in connection with your use of the App. The App is
						provided by Hunter Wallen.
					</LegalParagraph>
					<LegalParagraph>
						By downloading or using the App, you agree to this Privacy Policy. If
						you do not agree, please do not use the App.
					</LegalParagraph>
				</>
			}
		>
			<LegalSection title="Information We Collect">
				<LegalParagraph emphasis>
					We do not collect, store, transmit, or share any personal data or
					personally identifiable information from users of the App.
				</LegalParagraph>
				<LegalParagraph>The App does not:</LegalParagraph>
				<LegalList
					items={[
						'Collect your name, email address, phone number, or any other contact information.',
						'Track your location.',
						'Access your contacts, photos, microphone, or camera, except where strictly necessary to perform a function you actively initiate, and never to collect or transmit data.',
						'Use cookies, analytics tools, advertising identifiers, or any tracking technologies.',
						'Require you to create an account or log in.',
						'Transmit any information about you or your device to us or to any third party.',
					]}
				/>
				<LegalParagraph>
					Any data the App generates or processes stays entirely on your device.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Third-Party Services">
				<LegalParagraph>
					The App does not integrate with third-party analytics, advertising
					networks, crash reporting services, or other SDKs that would collect
					data about you.
				</LegalParagraph>
				<LegalParagraph>
					The App is distributed through the Apple App Store and Google Play
					Store. Those platforms may collect information about your download and
					use of the App in accordance with their own privacy policies:
				</LegalParagraph>
				<LegalList
					items={[
						'Apple Privacy Policy: https://www.apple.com/legal/privacy/',
						'Google Privacy Policy: https://policies.google.com/privacy',
					]}
				/>
				<LegalParagraph>
					We do not receive any personally identifiable information from those
					platforms.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Children's Privacy">
				<LegalParagraph>
					The App does not knowingly collect any information from anyone,
					including children under the age of 13 (or the equivalent minimum age
					in the relevant jurisdiction). The App is therefore compliant with the
					Children&rsquo;s Online Privacy Protection Act (COPPA) and similar
					regulations.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Your Rights">
				<LegalParagraph>
					Because we do not collect any personal data, there is no personal
					information for us to access, correct, delete, export, or restrict. If
					you have questions about your data rights, please contact us at the
					address below.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Security">
				<LegalParagraph>
					While we do not collect data, we recommend keeping your device&rsquo;s
					operating system and the App up to date to benefit from the latest
					security improvements.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Changes to This Privacy Policy">
				<LegalParagraph>
					We may update this Privacy Policy from time to time. Any changes will
					be posted on this page with a revised &ldquo;Last updated&rdquo; date.
					Continued use of the App after changes are posted constitutes
					acceptance of the revised policy.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Contact Us">
				<LegalParagraph>
					If you have any questions about this Privacy Policy, please contact us
					at:
				</LegalParagraph>
				<LegalContact name="Hunter Wallen" email="hunterwallen67@gmail.com" />
			</LegalSection>
		</LegalLayout>
	)
}

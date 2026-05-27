import {
	LegalContact,
	LegalLayout,
	LegalList,
	LegalParagraph,
	LegalSection,
} from '@/components/legal-doc'

export default function TermsScreen() {
	return (
		<LegalLayout
			title="Terms and Conditions"
			lastUpdated="May 27, 2026"
			intro={
				<>
					<LegalParagraph>
						These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of
						the Hunter Wallen mobile application (&ldquo;the App&rdquo;)
						provided by Hunter Wallen (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
						&ldquo;our&rdquo;).
					</LegalParagraph>
					<LegalParagraph>
						By downloading, installing, or using the App, you agree to be bound
						by these Terms. If you do not agree, do not download or use the App.
					</LegalParagraph>
				</>
			}
		>
			<LegalSection title="License">
				<LegalParagraph>
					We grant you a limited, non-exclusive, non-transferable, revocable
					license to use the App for your personal, non-commercial purposes,
					subject to these Terms and the rules of the platform from which you
					downloaded the App (Apple App Store or Google Play Store).
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Restrictions">
				<LegalParagraph>You agree not to:</LegalParagraph>
				<LegalList
					items={[
						'Copy, modify, distribute, sell, lease, or sublicense any part of the App.',
						'Reverse engineer, decompile, or attempt to extract the source code of the App, except to the extent such restriction is prohibited by applicable law.',
						'Use the App for any unlawful purpose or in any manner that could damage, disable, overburden, or impair the App.',
						'Use the App in a way that violates any applicable law or regulation.',
						'Remove or alter any proprietary notices or labels in the App.',
					]}
				/>
			</LegalSection>

			<LegalSection title="Intellectual Property">
				<LegalParagraph>
					The App, including its design, source code, text, graphics, logos, and
					all related intellectual property, is owned by Hunter Wallen and is
					protected by copyright, trademark, and other laws. These Terms do not
					grant you any rights to our trademarks or other intellectual property
					except as expressly stated.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Updates and Availability">
				<LegalParagraph>
					We may release updates, patches, or new versions of the App from time
					to time. We may also modify, suspend, or discontinue the App, in whole
					or in part, at any time without notice. We are not liable to you or
					any third party for doing so.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Third-Party Platforms">
				<LegalParagraph>
					The App is distributed through the Apple App Store and Google Play
					Store. Your download and use of the App is also subject to the terms
					of those platforms. If there is a conflict between these Terms and the
					platform&rsquo;s terms regarding the platform itself, the
					platform&rsquo;s terms control with respect to the platform.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Disclaimer of Warranties">
				<LegalParagraph>
					THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
					AVAILABLE&rdquo;, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF
					MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
					OR THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF HARMFUL
					COMPONENTS.
				</LegalParagraph>
				<LegalParagraph>
					WE DO NOT WARRANT THAT THE APP WILL MEET YOUR REQUIREMENTS OR THAT THE
					RESULTS OBTAINED FROM USING THE APP WILL BE ACCURATE OR RELIABLE.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Limitation of Liability">
				<LegalParagraph>
					TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HUNTER
					WALLEN BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
					OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE, WHETHER
					INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL,
					OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF OR INABILITY TO
					USE THE APP.
				</LegalParagraph>
				<LegalParagraph>
					OUR TOTAL LIABILITY TO YOU FOR ANY CLAIMS ARISING FROM OR RELATED TO
					THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID, IF ANY, FOR THE APP IN
					THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
				</LegalParagraph>
				<LegalParagraph>
					Some jurisdictions do not allow the exclusion of certain warranties or
					limitations on liability, so some of the above may not apply to you.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Indemnification">
				<LegalParagraph>
					You agree to indemnify and hold harmless Hunter Wallen and its
					affiliates from any claims, damages, losses, liabilities, and expenses
					(including reasonable legal fees) arising out of your use of the App
					or your violation of these Terms.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Termination">
				<LegalParagraph>
					We may terminate or suspend your access to the App at any time, with
					or without cause, and with or without notice. Upon termination, your
					right to use the App will cease immediately. Sections of these Terms
					that by their nature should survive termination will survive,
					including ownership provisions, warranty disclaimers, and limitations
					of liability.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Changes to These Terms">
				<LegalParagraph>
					We may modify these Terms at any time. Updated Terms will be posted
					with a revised &ldquo;Last updated&rdquo; date. Your continued use of
					the App after changes are posted constitutes acceptance of the revised
					Terms.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Governing Law">
				<LegalParagraph>
					These Terms are governed by the laws of the State of Colorado, United
					States, without regard to its conflict of law provisions. Any disputes
					arising from these Terms or the App shall be resolved in the courts
					located in Colorado.
				</LegalParagraph>
			</LegalSection>

			<LegalSection title="Contact">
				<LegalParagraph>
					For any questions about these Terms, please contact:
				</LegalParagraph>
				<LegalContact name="Hunter Wallen" email="hunterwallen67@gmail.com" />
			</LegalSection>
		</LegalLayout>
	)
}

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-8 border border-gray-700">
            <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
            <p className="text-gray-400 mb-8">Last updated: January 1, 2024</p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  AA Music Distribution ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our music distribution services, visit our website, or interact with our platform.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Name, email address, and contact information</li>
                  <li>Payment information and banking details</li>
                  <li>Biographical information and artist profiles</li>
                  <li>Musical works, recordings, and associated metadata</li>
                  <li>Performance rights organization (PRO) affiliations</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3">Usage Data</h3>
                <ul className="list-disc pl-6 text-gray-300 mb-4">
                  <li>Analytics data about your music's performance</li>
                  <li>Platform usage statistics and user interactions</li>
                  <li>IP addresses, browser information, and device data</li>
                  <li>Streaming and download statistics from digital platforms</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Distribute your music to digital streaming platforms and stores</li>
                  <li>Process royalty payments and provide financial reporting</li>
                  <li>Provide analytics and performance data</li>
                  <li>Communicate with you about your account and services</li>
                  <li>Comply with legal obligations and industry regulations</li>
                  <li>Improve our services and develop new features</li>
                  <li>Prevent fraud and ensure platform security</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-300 mb-4">We may share your information with:</p>
                <ul className="list-disc pl-6 text-gray-300">
                  <li><strong>Digital Service Providers:</strong> Spotify, Apple Music, Amazon Music, and other platforms where we distribute your music</li>
                  <li><strong>Payment Processors:</strong> Third-party services that handle royalty payments</li>
                  <li><strong>Performance Rights Organizations:</strong> ASCAP, BMI, SESAC, and international PROs</li>
                  <li><strong>Analytics Partners:</strong> Services that provide streaming and sales data</li>
                  <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p className="text-gray-300">
                  We implement industry-standard security measures to protect your information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights and Choices</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-300">
                  <li>Access, update, or delete your personal information</li>
                  <li>Withdraw consent for certain data processing activities</li>
                  <li>Request a copy of your data in a portable format</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request restriction of processing in certain circumstances</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">7. International Data Transfers</h2>
                <p className="text-gray-300">
                  As a global music distribution service, your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place when transferring data internationally, including standard contractual clauses and adequacy decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">8. Retention Period</h2>
                <p className="text-gray-300">
                  We retain your information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. Musical works and associated metadata may be retained for longer periods to maintain accurate historical records and royalty payments.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-gray-300">
                  Our services are not intended for individuals under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">10. Updates to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                  <p className="text-gray-300"><strong>Email:</strong> privacy@aamusicdistribution.com</p>
                  <p className="text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
                  <p className="text-gray-300"><strong>Address:</strong> 123 Music Street, Los Angeles, CA 90028</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
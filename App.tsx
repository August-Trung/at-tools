
import React from 'react';
import Layout, { HashRouter, Routes, Route } from './components/Layout';

// Import refactored tool components
import Dashboard from './components/tools/Dashboard';
import PasswordGenerator from './components/tools/PasswordGenerator';
import QRGenerator from './components/tools/QRGenerator';
import QRScanner from './components/tools/QRScanner';
import VietQRGenerator from './components/tools/VietQRGenerator';
import UrlShortener from './components/tools/UrlShortener';
import Notepad from './components/tools/Notepad';
import WhoisLookup from './components/tools/WhoisLookup';
import DomainWhois from './components/tools/DomainWhois';
import TwoFAGenerator from './components/tools/TwoFAGenerator';
import TempMail from './components/tools/TempMail';
import TempMailClient from "./components/tools/TempMailClient";
import FileUpload from './components/tools/FileUpload';

// Existing New Tools
import UserAgentGen from './components/tools/UserAgentGen';
import TextTools from './components/tools/TextTools';
import ImageTools from './components/tools/ImageTools';
import ListExtractor from './components/tools/ListExtractor';
import CryptoConverter from './components/tools/CryptoConverter';

// Latest Tools
import FakeIdentity from './components/tools/FakeIdentity';
import CreditCardGen from './components/tools/CreditCardGen';
import GlobalTime from './components/tools/GlobalTime';
import JsonFormatter from './components/tools/JsonFormatter';
import FancyText from './components/tools/FancyText';
import DiffChecker from './components/tools/DiffChecker';

const App: React.FC = () => {
  return (
		<HashRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Dashboard />} />

					{/* Original Tools */}
					<Route path="/password" element={<PasswordGenerator />} />
					<Route path="/qr-gen" element={<QRGenerator />} />
					<Route path="/qr-scan" element={<QRScanner />} />
					<Route path="/vietqr" element={<VietQRGenerator />} />
					<Route path="/shorten" element={<UrlShortener />} />
					<Route path="/notepad" element={<Notepad />} />
					<Route path="/whois" element={<WhoisLookup />} />
					<Route path="/domain" element={<DomainWhois />} />
					<Route path="/2fa" element={<TwoFAGenerator />} />
					<Route path="/temp-mail" element={<TempMailClient />} />
					<Route path="/upload" element={<FileUpload />} />

					{/* Phase 2 Tools */}
					<Route path="/ua-gen" element={<UserAgentGen />} />
					<Route path="/text-tools" element={<TextTools />} />
					<Route path="/image-tools" element={<ImageTools />} />
					<Route path="/extractor" element={<ListExtractor />} />
					<Route path="/crypto" element={<CryptoConverter />} />

					{/* Phase 3 Tools */}
					<Route path="/fake-identity" element={<FakeIdentity />} />
					<Route path="/cc-gen" element={<CreditCardGen />} />
					<Route path="/global-time" element={<GlobalTime />} />
					<Route path="/json-format" element={<JsonFormatter />} />
					<Route path="/fancy-text" element={<FancyText />} />
					<Route path="/diff" element={<DiffChecker />} />
				</Routes>
			</Layout>
		</HashRouter>
  );
};

export default App;

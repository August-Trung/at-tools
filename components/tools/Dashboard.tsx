import React from "react";
import { RouterLink } from "../Layout";
import {
	Home,
	KeyRound,
	QrCode,
	Scan,
	Coins,
	Link as LinkIcon,
	FileText,
	Globe,
	Shield,
	Mail,
	Upload,
	ArrowRight,
	Search,
	Smartphone,
	Filter,
	Binary,
	Image as ImageIcon,
	Calculator,
	User,
	CreditCard,
	Clock,
	FileJson,
	Sparkles,
	GitCompare,
} from "lucide-react";

const Dashboard = () => {
	const groupedTools = [
		{
			title: "Utilities",
			items: [
				{
					path: "/fake-identity",
					name: "Fake Identity",
					desc: "US Profile: Name, SSN, Address",
					icon: User,
					color: "text-neon-cyan",
				},
				{
					path: "/cc-gen",
					name: "CC Generator",
					desc: "Valid Luhn Visa/Mastercard/Amex",
					icon: CreditCard,
					color: "text-pink-400",
				},
				{
					path: "/global-time",
					name: "Global Time",
					desc: "Airdrop/Minting Clock Converter",
					icon: Clock,
					color: "text-yellow-400",
				},
				{
					path: "/ua-gen",
					name: "User Agent Gen",
					desc: "Fake device strings for automation",
					icon: Smartphone,
					color: "text-purple-400",
				},
				{
					path: "/diff",
					name: "Diff Checker",
					desc: "Compare text differences",
					icon: GitCompare,
					color: "text-orange-400",
				},
				{
					path: "/json-format",
					name: "JSON/XML Format",
					desc: "Beautify, Minify & Validate Data",
					icon: FileJson,
					color: "text-green-400",
				},
				{
					path: "/extractor",
					name: "List Extractor",
					desc: "Extract Email/IP/Proxy from text",
					icon: Filter,
					color: "text-orange-400",
				},
				{
					path: "/text-tools",
					name: "Text Obfuscator",
					desc: "Base64, URL, Hex Encoder/Decoder",
					icon: Binary,
					color: "text-green-500",
				},
				{
					path: "/fancy-text",
					name: "Fancy Text",
					desc: "Glitch, Bold, Script Text Gen",
					icon: Sparkles,
					color: "text-pink-500",
				},
				{
					path: "/image-tools",
					name: "Image Tools",
					desc: "Compress, Resize & Convert Images",
					icon: ImageIcon,
					color: "text-pink-300",
				},
				{
					path: "/crypto",
					name: "Crypto Convert",
					desc: "ETH ↔ Gwei ↔ Wei Calculator",
					icon: Calculator,
					color: "text-cyan-400",
				},
				{
					path: "/notepad",
					name: "Notepad",
					desc: "Markdown editor & Distraction-free mode",
					icon: FileText,
					color: "text-yellow-500",
				},
				{
					path: "/temp-mail",
					name: "Temp Mail",
					desc: "Disposable email addresses",
					icon: Mail,
					color: "text-orange-500",
				},
				{
					path: "/upload",
					name: "File Share",
					desc: "Temporary secure file upload",
					icon: Upload,
					color: "text-indigo-500",
				},
			],
		},

		{
			title: "Network",
			items: [
				{
					path: "/whois",
					name: "WHOIS / IP",
					desc: "IP Location, ISP & ASN Info",
					icon: Globe,
					color: "text-cyan-500",
				},
				{
					path: "/domain",
					name: "Domain Whois",
					desc: "Registrar, Age & Name Servers",
					icon: Search,
					color: "text-pink-400",
				},
			],
		},

		{
			title: "Security",
			items: [
				{
					path: "/password",
					name: "Password Gen",
					desc: "Generate strong, secure passwords",
					icon: KeyRound,
					color: "text-green-400",
				},
				{
					path: "/2fa",
					name: "2FA Generator",
					desc: "TOTP Code generator",
					icon: Shield,
					color: "text-red-500",
				},
			],
		},

		{
			title: "QR & Links",
			items: [
				{
					path: "/qr-gen",
					name: "QR Generator",
					desc: "Create custom QR / Wifi codes",
					icon: QrCode,
					color: "text-pink-500",
				},
				{
					path: "/qr-scan",
					name: "QR Scanner",
					desc: "Scan codes from camera or file",
					icon: Scan,
					color: "text-purple-500",
				},
				{
					path: "/vietqr",
					name: "VietQR Gen",
					desc: "Vietnam Banking QR Standard",
					icon: Coins,
					color: "text-green-500",
				},
				{
					path: "/shorten",
					name: "Link Shortener",
					desc: "Make long URLs short & sweet",
					icon: LinkIcon,
					color: "text-blue-500",
				},
			],
		},
	];

	return (
		<div>
			<div className="mb-10 text-center lg:text-left">
				<h2 className="text-4xl font-bold text-white mb-2">
					Welcome to{" "}
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-cyan">
						AT Tools
					</span>
				</h2>
				<p className="text-gray-400">
					Essential MMO utilities. No ads. No tracking. Pure function.
				</p>
			</div>

			{groupedTools.map((group) => (
				<div key={group.title} className="mb-8">
					<h3 className="text-xl font-semibold text-white mb-4">
						{group.title}
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
						{group.items.map((tool) => (
							<RouterLink
								key={tool.path}
								to={tool.path}
								className="group relative bg-dark-800 border border-dark-700 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-neon-purple/10 hover:border-neon-purple/50">
								<div
									className={`p-3 rounded-lg bg-dark-900 w-fit mb-4 group-hover:scale-110 transition-transform ${tool.color}`}>
									<tool.icon size={24} />
								</div>
								<h3 className="text-lg font-bold text-gray-200 mb-1 group-hover:text-white">
									{tool.name}
								</h3>
								<p className="text-xs text-gray-500 leading-relaxed">
									{tool.desc}
								</p>
								<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
									<ArrowRight
										className="text-gray-400"
										size={20}
									/>
								</div>
							</RouterLink>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default Dashboard;

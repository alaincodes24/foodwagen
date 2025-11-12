import Image from "next/image";
import Link from "next/link";
import Instagram from "@/public/images/instagram.png";
import Facebook from "@/public/images/facebook.png";
import Twitter from "@/public/images/twitter.png";
import Envelope from "@/public/images/envelope.png";
import Button from "../../Button";

const footerLinkSections = [
	{
		title: "Company",
		links: [
			{ label: "About us", href: "#" },
			{ label: "Team", href: "#" },
			{ label: "Careers", href: "#" },
			{ label: "Blog", href: "#" },
		],
	},
	{
		title: "Contact",
		links: [
			{ label: "Help & Support", href: "#" },
			{ label: "Partner with us", href: "#" },
			{ label: "Ride with us", href: "#" },
		],
	},
	{
		title: "Legal",
		links: [
			{ label: "Terms & Conditions", href: "#" },
			{ label: "Refund & Cancellation", href: "#" },
			{ label: "Privacy Policy", href: "#" },
			{ label: "Cookie Policy", href: "#" },
		],
	},
];

const socialLinks = [
	{ name: "Instagram", href: "#", Icon: Instagram },
	{ name: "Facebook", href: "#", Icon: Facebook },
	{ name: "Twitter", href: "#", Icon: Twitter },
];

const FooterTop = () => {
	return (
		<div className="flex w-full flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
			<div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
				{footerLinkSections.map(({ title, links }) => (
					<div key={title} className="space-y-4">
						<h3 className="text-lg font-semibold tracking-wide text-white">
							{title}
						</h3>
						<ul className="space-y-3 text-sm leading-6 text-white/70">
							{links.map(({ label, href }) => (
								<li key={label}>
									<Link href={href} className="transition hover:text-primary">
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className="flex w-full max-w-sm flex-col justify-between gap-10 lg:w-auto lg:max-w-[360px]">
				<div>
					<p className="text-xs font-semibold tracking-[0.35em] text-white/50 uppercase">
						Follow us
					</p>
					<div className="mt-4 flex items-center gap-4">
						{socialLinks.map(({ name, href, Icon }) => (
							<Link key={name} href={href} aria-label={name}>
								<Image src={Icon} alt={name} className="w-4 h-4" />
							</Link>
						))}
					</div>
				</div>
				<div className="space-y-4">
					<p className="text-lg font-semibold text-white">
						Receive exclusive offers in your mailbox
					</p>
					<form className="flex flex-col gap-3 sm:flex-row sm:items-center">
						<div className="flex flex-1 items-center gap-3 rounded-lg border border-white/10 bg-white/8 px-4">
							<Image
								src={Envelope}
								alt="Mail"
								className="h-5 w-6 shrink-0 text-primary"
							/>
							<label className="sr-only" htmlFor="footer-email">
								Email address
							</label>
							<input
								id="footer-email"
								type="email"
								placeholder="Enter your email"
								className="h-12 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
							/>
						</div>
            <Button className="rounded-lg">
							<p>Subscribe</p>
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;

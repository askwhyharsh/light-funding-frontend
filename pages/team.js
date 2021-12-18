import Head from "next/head"
import Image from "next/image"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const images = [
	{"name": "Harsh Singh", "image": "https://pbs.twimg.com/profile_images/1454368597204156421/kapadtuB_400x400.jpg", "role": "Smart Contract / Frontend", "desc": "Through light, we are making sure that your hard earned money that you contribute with is spent wisely by the fund raiser and not misused in any way. We are also incentivising contributors by rewarding them with NFTs", "github": "https://github.com/Harsh8055git", "twitter": "https://twitter.com/harsh_eth"},
	{"name": "Satyam Kulkarni", "image": "https://pbs.twimg.com/profile_images/1462059525154885640/mSbb33zs_400x400.jpg", "role": "Frontend", "desc": "Crowdfunding using previous tech was flawed, trusting middleman is not a good choice, stakes are high here, so using tech like blockchain can solve this problem and we are doing it!", "github": "https://github.com/sk1122", "twitter": "https://twitter.com/sk1122_"},
	{"name": "Harshal Masure", "image": "https://pbs.twimg.com/profile_images/1472049520896720896/wPwXaUj9_400x400.jpg", "role": "Frontend", "desc": "By Light  you will understand how middlemen are useless , having safe side and very  low stakes where funds cannot be missused.Previous technology needs some modern solution  👋.", "github": "", "twitter": ""},
	{"name": "Rahul", "image": "https://avatars.githubusercontent.com/u/94465240?v=4", "role": "Frontend/UI ", "desc": "Light rocks, while middlemens shock", "github": "https://github.com/glitch-afk", "twitter": "https://twitter.com/v_3_n0m"},
	{"name": "Bhakti Ghude", "image": "https://avatars.githubusercontent.com/u/76544741?v=4", "role": "Frontend", "desc": "Light rocks, while middlemens shock", "github": "https://github.com/Bhakti087", "twitter": "https://twitter.com/bhaktighude2"}
]

export default function Team() {
	return ( <div className="bg">
		
			<Head>
				<title>Team - Light</title>
			</Head>
			<Navbar />
			<div>
				<div className="container flex justify-center mx-auto pt-16">
					<div>
						<p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
						<h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
					</div>
				</div>
				<div className="w-full glass px-10 pt-10">
					<div className="container mx-auto">
						<div className="lg:flex  md:flex sm:flex items- xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
							{images.map(value => (
								<div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative   mb-32 px-2 sm:mb-24 xl:max-w-sm lg:w-2/5">
								<div className="rounded overflow-hidden shadow-md pt-24 glass rounded  bg-white">
									<div className="absolute -mt-20 w-full flex justify-center">
										<div className="h-32 w-32">
											<img src={value.image} className="rounded-full object-cover h-full w-full shadow-md" />
										</div>
									</div>
									<div className="px-6 mt-16">
										<div className="font-bold text-3xl text-center pb-1">{value.name}</div>
										<p className="text-gray-800 text-sm text-center">{value.role}</p>
										<p className="text-center text-gray-600 text-base pt-3 font-normal">{value.desc}</p>
										<div className="w-full flex justify-center pt-5 pb-5">
											<a href={value.github} className="mx-5">
												<div>
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
														<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
													</svg>
												</div>
											</a>
											<a href={value.twitter} className="mx-5">
												<div>
													<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
														<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
													</svg>
												</div>
											</a>
										</div>
									</div>
								</div>
							</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<Footer />
	
		</div>
	)
}

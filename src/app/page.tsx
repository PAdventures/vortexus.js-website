import LandingAbout from "../components/landing/LandingAbout.tsx";
import MainLanding from "../components/landing/MainLanding.tsx";

export default function Home() {
    return (
		<div className='w-screen bg-background'>
            <MainLanding />
            <LandingAbout />
        </div>
	);
}

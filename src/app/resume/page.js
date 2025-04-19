"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { resumeLink } from "../asset/AppData";

import "../asset/Style/Resume.css";

function Page() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            const userConfirmed = window.confirm("Do you want to open the resume in a new tab?");
            if (userConfirmed) {
                window.open(resumeLink, "_blank");
                router.push("/");
            } else {
                router.push("/");
            }
        }, 100);
    }, [router]);
}

export default Page;

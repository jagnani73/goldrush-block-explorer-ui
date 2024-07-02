"use client";

import { Footer, Navbar } from "@/components/shared";
import { goldrushConfig } from "@/goldrush.config";
import { GoldRushProvider } from "@covalenthq/goldrush-kit";
import { useEffect, useState } from "react";

const GoldRushLayout: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isWindowDefined, setIsWindowDefined] = useState<boolean>(
        typeof window !== "undefined"
    );

    useEffect(() => {
        setIsWindowDefined(typeof window !== "undefined");
    }, []);

    if (!isWindowDefined) {
        return null;
    }

    return (
        <GoldRushProvider
            apikey={process.env.NEXT_PUBLIC_COVALENT_API_KEY as string}
            newTheme={goldrushConfig.theme}
        >
            <Navbar />
            <section className="gbk-flex gbk-flex-1 gbk-p-8">
                {children}
            </section>
            <Footer />
        </GoldRushProvider>
    );
};

export default GoldRushLayout;

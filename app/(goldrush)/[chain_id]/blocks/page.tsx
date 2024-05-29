"use client";

import { type BlocksPageProps } from "@/utils/types/pages.types";
import { BlocksList } from "@covalenthq/goldrush-kit";
import Link from "next/link";

const BlocksPage: React.FC<BlocksPageProps> = ({ params: { chain_id } }) => {
    return (
        <main className="gbk-mx-auto gbk-flex gbk-w-11/12 gbk-flex-col gbk-gap-4 gbk-p-10">
            <BlocksList
                chain_name={chain_id}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                actionable_block={(block) => ({
                    parent: Link,
                    parentProps: {
                        href: `/${chain_id}/block/${block}`,
                        className: "hover:underline",
                    },
                })}
            />
        </main>
    );
};

export default BlocksPage;
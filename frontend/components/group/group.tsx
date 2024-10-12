import { Group } from "@/types/group.types";
import React from "react";
import CreateLinkModal from "../modals/link/create-link-modal";
import EditLinksModal from "../modals/link/edit-links-modal";
import LinkButton from "../link-button/link-button";

export default function GroupContainer({
  group,
  pageId,
  editable,
}: {
  group: Group;
  pageId: string;
  editable?: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-2xl font-medium leading-none">{group.name}</p>
        {editable ? (
          <div className="flex gap-x-1.5">
            <CreateLinkModal pageId={pageId} groupId={group.id} />
            <EditLinksModal group={group} />
          </div>
        ) : null}
      </div>
      <p className="mt-1 text-muted-foreground text-sm">{group.description}</p>
      <div className="mt-4 flex gap-1 flex-wrap">
        {group.links?.length ? (
          group.links?.map((link) => <LinkButton key={link.id} link={link} />)
        ) : (
          <div className="">
            <p className="">Its empty here, add some links.</p>
          </div>
        )}
      </div>
    </div>
  );
}

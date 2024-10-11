import React from "react";
import { Card, CardContent } from "./card";

export default function CodeBlock() {
  return (
    <Card>
      <CardContent className="p-4">
        <pre className="font-mono text-sm">
          <code lang="javascript">{`this.lofasz = 13`}</code>
        </pre>
      </CardContent>
    </Card>
  );
}

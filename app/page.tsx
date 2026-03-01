import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <main className="px-87.5">
      <Card>
        <Input />
        <Button>Button</Button>
        <Camera />
      </Card>
    </main>
  );
}

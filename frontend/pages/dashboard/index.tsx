// pages/dashboard/index.tsx
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function DashboardIndex() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/inversiones");
  }, []);

  return null;
}

import { Inter, Lusitana } from "next/font/google";

// Good to know: Next.js downloads font files at build time and hosts them statically as optimisation
export const inter = Inter({ subsets: ["latin"] });
export const lusitana = Lusitana({ subsets: ["latin"], weight: "400" });

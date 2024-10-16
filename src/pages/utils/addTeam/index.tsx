import Head from "next/head";
import MaxWidthWrapper from "~/components/layout/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Profile from "~/components/profile/profile";
import { EditProfile } from "~/components/profile/profile-edit";
import { AddTeam } from "~/components/team/add-team";
export default function AddTeamm() {
  return (
    <>

      <main>
        <section className="bg-white text-black transition-colors duration-500 dark:bg-gray-900/10 dark:text-white">
          <div className="mt-7 flex flex-col items-center justify-center text-center">
            <MaxWidthWrapper>
                <AddTeam/>
            </MaxWidthWrapper>
          </div>
        </section>
      </main>
    </>
  );
}

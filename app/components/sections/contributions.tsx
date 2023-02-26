import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
  OpenSourceContributions,
  OwnApps,
  StackOverflowDefaults,
} from "../../constants/contributions";
import MeshPurple from "../../images/mesh-purple.svg";
import StackOverflowLogo from "../../images/stack-overflow.svg";
import { Section } from "../shared/section";
import { Tooltip } from "../shared/tooltip";
import { Link } from "@remix-run/react";

export const Contributions = () => {
  return (
    <Section title="Community Contributions">
      <div className="flex">
        <div className="flex flex-wrap gap-x-24 justify-center gap-y-36 mx-auto">
          <div className="flex relative flex-col min-w-[250px]">
            <Mesh />
            <MyApps />
          </div>
          <div className="flex relative flex-col min-w-[270px]">
            <Mesh />
            <OpenSource />
          </div>
          <div className="flex relative flex-col min-w-[200px]">
            <Mesh />
            <StackOverflow />
          </div>
        </div>
      </div>
    </Section>
  );
};

export const Mesh = () => {
  return (
    <img
      aria-hidden="true"
      alt=""
      height={800}
      width={600}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 w-[200%] h-[150%]"
      src={MeshPurple}
    />
  );
};

const StackOverflow = () => {
  const [profilesData, setProfilesData] =
    useState<StackOverflowResponse | null>(null);
  const profile = profilesData?.items?.[0];

  useEffect(() => {
    fetch(STACK_OVERFLOW_API)
      .then((res) => res.json())
      .then((res) => setProfilesData(res));
  }, []);
  return (
    <>
      <h3 className="text-lg mb-4">Stack Overflow</h3>
      <Link
        to={StackOverflowDefaults.profileUrl}
        target="_blank"
        className="flex text-left"
      >
        <motion.div
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          viewport={{ amount: 0.9, once: true }}
          initial="hidden"
          whileInView="visible"
          aria-label="stack overflow profile"
          className="flex flex-col max-w-fit bg-gradient-to-br from-neutral to-neutral-dark border-solid border-secondary/10 border-2 py-2 px-4 rounded-xl hover:cursor-pointer mx-auto text-secondary"
        >
          <img
            loading="lazy"
            className="my-auto mr-4"
            height="45"
            width="38"
            alt="stack overflow logo"
            src={StackOverflowLogo}
          />
          <div>
            <div className="-mb-1.5 ml-1">Reputation</div>
            <div className="text-xl">
              {(
                profile?.reputation ?? StackOverflowDefaults.reputation
              ).toLocaleString("en-US")}
            </div>
          </div>
          <div className="flex w-full w-full mt-1.5 justify-between">
            <Badge
              color="#D0A600"
              number={
                profile?.badge_counts.gold ?? StackOverflowDefaults.goldBadge
              }
            />
            <Badge
              color="#707A81"
              number={
                profile?.badge_counts.silver ??
                StackOverflowDefaults.silverBadge
              }
            />
            <Badge
              color="#986400"
              number={
                profile?.badge_counts.bronze ??
                StackOverflowDefaults.bronzeBadge
              }
            />
          </div>
        </motion.div>
      </Link>
    </>
  );
};

const Badge = ({ color, number }: { color: string; number: number }) => {
  return (
    <div className="flex ">
      <div
        className="h-2 w-2 rounded-full my-auto"
        style={{ backgroundColor: color }}
      />
      <span className="ml-2 text-md mb-1">{number}</span>
    </div>
  );
};

const OpenSource = () => {
  return (
    <>
      <h3 className="text-lg mb-4">Open Source Contributions</h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.9, once: true }}
        transition={{
          staggerChildren: 0.3,
        }}
        className="flex flex-col gap-12 m-auto"
      >
        {OpenSourceContributions.map((contribution) => {
          return (
            <Link to={contribution.link} target="_blank">
              <motion.div
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
                key={contribution.name}
                className="hover:cursor-pointer"
                aria-label={`${contribution.name} website`}
              >
                <img
                  loading="lazy"
                  alt={`${contribution.name} logo`}
                  width="50"
                  height="50"
                  className="max-h-[100px] w-auto"
                  src={contribution.icon}
                />
                <p className="text-md text-secondary">{contribution.name}</p>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </>
  );
};

const MyApps = () => {
  return (
    <>
      <h3 className="text-lg mb-6">My Apps</h3>
      <div className="flex">
        <motion.div
          className="grid grid-cols-2 m-auto gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          transition={{
            staggerChildren: 0.3,
          }}
        >
          {OwnApps.map((app) => {
            return (
              <motion.div
                className="col-span-1 flex flex-col"
                key={app.name}
                variants={{
                  visible: { opacity: 1 },
                  hidden: { opacity: 0 },
                }}
              >
                <Tooltip text={app.description}>
                  <Link to={app.link} target="_blank">
                    <motion.div
                      aria-label={app.name}
                      whileTap={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-xl hover:cursor-pointer mx-auto"
                      style={{
                        backgroundImage: `url(${app.icon})`,
                      }}
                    />
                  </Link>
                </Tooltip>
                <p className="max-w-[100px]">{app.name}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

const STACK_OVERFLOW_API =
  "https://api.stackexchange.com/2.3/users/4934446?order=desc&sort=reputation&site=stackoverflow";

export interface StackOverflowResponse {
  items: Item[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}

export interface Item {
  badge_counts: BadgeCounts;
  account_id: number;
  is_employee: boolean;
  last_modified_date: number;
  last_access_date: number;
  reputation_change_year: number;
  reputation_change_quarter: number;
  reputation_change_month: number;
  reputation_change_week: number;
  reputation_change_day: number;
  reputation: number;
  creation_date: number;
  user_type: string;
  user_id: number;
  location: string;
  website_url: string;
  link: string;
  profile_image: string;
  display_name: string;
}

export interface BadgeCounts {
  bronze: number;
  silver: number;
  gold: number;
}

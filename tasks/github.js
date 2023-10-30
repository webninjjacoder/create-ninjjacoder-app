#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const cp = require("child_process");

const { Octokit, App } = require("octokit");
const fetch = require("node-fetch");

const createApp = async () => {
  const params = process.argv.slice(2);

  const currentDirectory = process.cwd();

  const octokit = new Octokit({
    auth: "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",
    request: {
      fetch: fetch,
    },
  });

  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();

  await octokit.request(
    `GET /repos/${login}/create-ninjjacoder-app/contents/react-apps/react-cra`,
    {
      owner: "OWNER",
      repo: "REPO",
      path: "PATH",
    }
  );
};

createApp();

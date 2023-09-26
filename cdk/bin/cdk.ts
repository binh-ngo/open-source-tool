#!/usr/bin/env node
import { App, Environment, Stack, StackProps } from 'aws-cdk-lib';
import { FrontendStack } from '../lib/frontend-stack';
require("dotenv").config({ path: '.env' });

const app = new App();

class OpenSourceToolStack extends Stack {
  constructor(parent: App, name: string, props: StackProps) {
    super(parent, name, props);

    new FrontendStack(this, 'FrontendStack', {
      env: props.env as Environment,
    });

  }
}

new OpenSourceToolStack(app, 'OpenSourceTool', {
  env: {
    region: process.env.REGION,
    account: process.env.AWS_ACCOUNT,
  },
});
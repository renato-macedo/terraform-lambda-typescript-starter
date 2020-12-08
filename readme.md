# Terraform Lambda Typescript Starter 🏗λ

This is a basic Hello World starter template that utilises terraform for provisioning cloud resources. It is an opionanted starter which
uses TypeScript, ESlint, Prettier and Husky.

## Usage 🔬

_Currently being consumed by these project(s) of mine, will try and keep this list updated_

-   [Serverless Weather 🌦](https://github.com/rahman95/serverless-weather)

## Deployment 🚀

-   Run `npm run script:build-dependency-layer` this will run a bash script to zip up production dependencies and add them to the lamba as a layer
-   Run `npm run build` to run TSC to compile TS code to plain JS
-   Run `npm run cleanup` to remove generated files after deployment steps
-   Run `npm run tf:init` to get aws provider plugin downloaded
-   Run `npm run tf:plan` to see changes that will be made
-   Run `npm run tf:apply` to actually make those changes to your provider
-   Visit AWS and see all your services provisioned via terraform
-   Run `npm run tf:destroy` to destroy all the services that were built

You can also simply call `npm run deploy:all` to both zip up an archive and provision the resources together. Similarly you could run `npm run update:all` to destroy all resources and re-provision them.

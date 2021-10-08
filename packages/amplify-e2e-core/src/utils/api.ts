import * as path from 'path';
import * as fs from 'fs-extra';
import { TRANSFORM_CONFIG_FILE_NAME } from 'graphql-transformer-core';

export function updateSchema(projectDir: string, projectName: string, schemaText: string) {
  const schemaPath = path.join(projectDir, 'amplify', 'backend', 'api', projectName, 'schema.graphql');
  fs.writeFileSync(schemaPath, schemaText);
}

export function updateConfig(projectDir: string, projectName: string, config: any = {}) {
  const configPath = path.join(projectDir, 'amplify', 'backend', 'api', projectName, TRANSFORM_CONFIG_FILE_NAME);
  fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
}

export function addCustomResolver(projectDir: string, projectName: string, resolverName: string, resolver: string) {
  const resolverPath = path.join(projectDir, 'amplify', 'backend', 'api', projectName, 'resolvers', resolverName);
  fs.writeFileSync(resolverPath, resolver);
}

export function addCustomResourcesJson(projectDir: string, projectName: string, json?: string) {
  const jsonPath = path.join(projectDir, 'amplify', 'backend', 'api', projectName, 'stacks', 'CustomResources.json');
  fs.writeFileSync(jsonPath, json || '{}');
}

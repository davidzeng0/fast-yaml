import * as js_yaml from 'js-yaml';
import * as yaml from 'yaml';

export function parse(data: string): any{
	return js_yaml.load(data);
}

export function stringify(data: any): string{
	return yaml.stringify(data);
}
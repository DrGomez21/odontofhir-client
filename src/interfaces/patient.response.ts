export interface HapiFhirPatientResponse {
    resourceType: string;
    id: string;
    meta: HapiFhirPatientResponseMeta;
    type: string;
    total: number;
    link: Link[];
    entry: Entry[];
}

export interface Entry {
    fullUrl: string;
    resource: Resource;
    search: Search;
}

export interface Resource {
    resourceType: string;
    id: string;
    meta: ResourceMeta;
    name: Name[];
    telecom: Telecom[];
    gender: string;
    birthDate: Date;
    address?: Address[];
}

export interface Address {
    line: string[];
    city: string;
    state: string;
    country: string;
}

export interface ResourceMeta {
    versionId: string;
    lastUpdated: Date;
    source: string;
}

export interface Name {
    use: string;
    family: string;
    given: string[];
}

export interface Telecom {
    system: System;
    value: string;
    use?: string;
}

export enum System {
    Email = "email",
    Phone = "phone",
}

export interface Search {
    mode: string;
}

export interface Link {
    relation: string;
    url: string;
}

export interface HapiFhirPatientResponseMeta {
    lastUpdated: Date;
}

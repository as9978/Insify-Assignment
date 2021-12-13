interface searchArg {
  q: string;
  size?: number;
  fields?: any[];
}

interface ISearchReponse {
  handelsnaam: ICompany[];
}

interface ICompany {
  text: string;
  dossiernummer: string;
  link: string;
  id: string;
  handelsnaam: string;
  plaats: string;
}

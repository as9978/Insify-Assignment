import { useQuery } from "react-query";
import axios from "axios";

export const search = ({ q, size, fields }: searchArg) =>
  useQuery<ICompany[]>(
    ["search", q],
    async () => {
      try {
        const { data } = await axios.get<ISearchReponse>(
          "https://api.overheid.io/suggest/openkvk/" + q,
          {
            params: {
              "ovio-api-key":
                "06f37335f01597898c16ffbd729d31c4763768f49f2621384cd2ee021cf976ca",
              size,
              fields,
            },
          }
        );

        return data.handelsnaam;
      } catch (error) {
        throw new Error(error);
      }
    },
    {
      enabled: q.length !== 0,
    }
  );

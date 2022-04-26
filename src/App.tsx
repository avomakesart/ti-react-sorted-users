import axios from "axios";
import { setPriority } from "os";
import { useEffect, useRef, useState, ChangeEvent } from "react";
import {
  Button,
  Container,
  Grid,
  SelectInput,
  Title,
  UserImage,
  UserInfo,
} from "./components";

export default function App() {
  // place your state here
  type Person = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  const [teamData, setTeamData] = useState([] as Array<Person>);
  const [indexPage, setIndexPage] = useState(1);
  const [selectSort, setSelectSort] = useState("Select a value");

  const fetchData = (index: number) => {
    axios
      .get("https://reqres.in/api/users", {
        params: { per_page: 4, page: index },
      })
      .then((response) => {
        let respose = response.data;
        let personList = respose.data as Array<Person>;
        if (selectSort === "alphabetically") {
          setTeamData(
            personList.sort((a, b) =>
              a.first_name > b.first_name ? 1 : -1
            ) as Array<Person>
          );
        } else {
          setTeamData(personList);
        }
      });
  };

  useEffect(() => {
    fetchData(indexPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [indexPage, selectSort]);

  const sortData = ["id", "alphabetically"];

  function handleChangeFilter(event: ChangeEvent<HTMLSelectElement>) {
    setSelectSort(event.target.value);
  }

  const prevPage = () => {
    if (indexPage === 1) return;
    setIndexPage(indexPage - 1);
  };

  const nextPage = () => {
    if (indexPage === 3) return;
    setIndexPage(indexPage + 1);
  };

  return (
    <Container>
      <Title>Our Team</Title>
      <SelectInput
        data={sortData}
        handleChange={handleChangeFilter}
        selectedValue={selectSort}
        defaultValue="Select a value"
        name="id"
        label="Sort by:"
      />
      <Grid>
        {teamData.length > 1 ? (
          teamData.map((item: Person) => (
            <div className="flex-column items-center" key={item.id}>
              <UserImage url={item.avatar} alt={item.first_name} />
              <UserInfo
                fullName={`${item.first_name} ${item.last_name}`}
                email={item.email}
              />
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </Grid>

      <div className="flex space-around mt-40">
        {teamData.length > 1 ? (
          <>
            <Button
              btnType={indexPage === 1 ? "disabled" : "primary"}
              type="button"
              onClick={prevPage}
              disabled={indexPage === 1 ? true : false}
            >
              Prev users
            </Button>
            <Button
              btnType={indexPage === 3 ? "disabled" : "primary"}
              type="button"
              onClick={nextPage}
              disabled={indexPage === 3 ? true : false}
            >
              Next users
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
}

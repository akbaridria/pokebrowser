import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import type { FilterOption } from "@/types";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Grid2X2Icon,
  Grid3X3Icon,
  Search,
} from "lucide-react";
import { useQueryState } from "nuqs";

const filterOptions: { value: FilterOption; Icon: React.FC; label: string }[] =
  [
    { value: "grid-3", Icon: Grid3X3Icon, label: "Grid 3x3" },
    { value: "grid-2", Icon: Grid2X2Icon, label: "Grid 2x2" },
  ];

const FilterBar: React.FC = () => {
  const [filterbar, setFilterbar] = useQueryState<FilterOption>("filterbar", {
    defaultValue: "grid-3",
    parse: (value) => (value === "grid-2" ? "grid-2" : "grid-3"),
    serialize: (value) => value,
  });
  const [page, setPage] = useQueryState<number>("page", {
    defaultValue: 1,
    parse: Number,
    serialize: String,
  });

  const [search, setSearch] = useQueryState<string>("search", {
    defaultValue: "",
    parse: String,
    serialize: String,
  });

  return (
    <div className="flex items-center justify-between gap-8">
      <InputGroup className="max-w-[600px]">
        <InputGroupInput
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      <div className="flex items-center gap-2">
        <ButtonGroup>
          {filterOptions.map(({ value, Icon, label }) => (
            <Button
              key={value}
              variant={filterbar === value ? "outline" : "secondary"}
              size="icon-sm"
              onClick={() => setFilterbar(value)}
              aria-label={label}
            >
              <Icon />
            </Button>
          ))}
        </ButtonGroup>
        <ButtonGroup>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Previous"
            className={page === 1 ? "pointer-events-none" : ""}
            onClick={() => setPage(page - 1)}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon-sm"
            aria-label="Next"
            onClick={() => setPage(page + 1)}
          >
            <ArrowRightIcon />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default FilterBar;

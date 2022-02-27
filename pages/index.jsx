import { IconContext } from "react-icons";
import { HiOutlinePlay, HiOutlineStar } from "react-icons/hi";
import {
  CategoryTag,
  Button,
  Switch,
  Tooltip,
  EfdbBadge,
  InfoCard,
  RangeSelect,
  MultiSelect,
  HeroSlider,
  SortingButton,
} from "components";
import MovieCard from "components/MovieCard";

const Home = () => {
  return (
    <IconContext.Provider value={{ className: "ricon" }}>
      <Button
        icon={<HiOutlinePlay />}
        label="Oynat"
        size="small"
        type="secondary"
      />
      <Button icon={<HiOutlinePlay />} label="Oynat" />
      <Button label="Oynat" />
      <Button icon={<HiOutlinePlay />} label="Oynat" type="secondary" />
      <Button
        icon={<HiOutlinePlay />}
        label="Oynat"
        type="secondary"
        size="long"
      />
      <Switch />
      <CategoryTag label="Aksiyon" />

      <Tooltip message="test 123123423423423 dsfds">
        <Switch />
      </Tooltip>

      <Tooltip message="test 123123423423423 dsfds">
        <CategoryTag label="Aksiyon" />
      </Tooltip>

      <EfdbBadge variant={1} rating={6.3} />
      <EfdbBadge variant={2} rating={7.3} />
      <EfdbBadge variant={3} rating={4.3} />
      <EfdbBadge variant={4} rating={2.3} />

      <InfoCard
        icon={<HiOutlineStar />}
        header="adsfsad"
        description="asdfdsfadsfadsf"
        info="asdfdsfadsfadsf"
      />

      <RangeSelect
        step={1}
        min={2000}
        max={2022}
        defaultValue={[2002, 2010]}
        style={{ width: 399 }}
        pushable
        draggableTrack
      />

      <MultiSelect />
      <HeroSlider />
      <SortingButton />
      <MovieCard />
    </IconContext.Provider>
  );
};

export default Home;

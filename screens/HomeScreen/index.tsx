import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  EventListWrapper,
  Header,
  HomeWrapper,
  MainWrapper,
  UserImage,
} from "./styles";
import BackIcon from "../../assets/svg/BackIcon";
import {
  Alert,
  Animated,
  Dimensions,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import BlackCatLogoWithoutCircle from "../../assets/svg/BlackCatLogoWithoutCircle";
import MagnifierGlassIcon from "../../assets/svg/MagnifierGlassIcon";
import Sidebar from "./Sidebar";
import { useEffect, useRef, useState, useContext } from "react";
import EventBox from "./EventBox";
import { IEventDetail, IUser } from "../../utils/interface";
import { EventContext } from "../../modules/event/context";
import { addEvent } from "../../modules/event/action";
import { UserContext } from "../../modules/user/context";
import { addUser } from "../../modules/user/action";
import TwitterHomeCircle from "../../assets/svg/TwitterHomeCircle";

export default () => {
  const insets = useSafeAreaInsets();
  const { width, height } = Dimensions.get("window");
  const hideSidebarTranslateX = width * (-3 / 4);

  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const translateX = useRef(new Animated.Value(hideSidebarTranslateX)).current;
  const [page, setPage] = useState(1);

  const lastEventRef = useRef(null);

  const eventFlatList = useRef(null);

  const { events, dispatch } = useContext(EventContext);

  const { users, dispatch: userDispatch } = useContext(UserContext);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const res = await fetch("/users");

        const data = await res.json();

        userDispatch(addUser(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllUsers();
  }, []);

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: showSidebar ? 0 : hideSidebarTranslateX,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [showSidebar]);

  useEffect(() => {
    const fetchEvent = async () => {
      const res = await fetch(`/events`);
      const data: IEventDetail[] = await res.json();

      dispatch(addEvent(data));
      console.table(events);
    };
    fetchEvent();
  }, [page]);

  const renderEvents = ({
    item,
    index,
  }: {
    item: IEventDetail;
    index: number;
  }) => {
    if (index === events.length) {
      return (
        <View ref={lastEventRef}>
          <EventBox event={item} />
        </View>
      );
    }
    return <EventBox event={item} />;
  };

  return (
    <MainWrapper>
      <HomeWrapper onPress={() => setShowSidebar(false)}>
        <View style={{ flex: 1, paddingBottom: insets.bottom }}>
          <Header
            style={{
              paddingTop: insets.top,
            }}
          ></Header>

          <View
            style={{
              marginTop: 100,
            }}
          >
            <EventListWrapper style={{ marginTop: insets.top }}>
              <TouchableWithoutFeedback
                style={{
                  width: "100%",
                }}
                onPress={() => {
                  if (!eventFlatList.current) return;

                  eventFlatList.current.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                }}
              >
                <View
                  style={{
                    marginTop: "-7%",
                    position: "absolute",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <TwitterHomeCircle />
                </View>
              </TouchableWithoutFeedback>
              {events.length > 0 && (
                <FlatList
                  ref={eventFlatList}
                  data={events}
                  renderItem={renderEvents}
                  keyExtractor={(item) => item.id}
                  contentContainerStyle={{
                    paddingBottom: insets.bottom + 100,
                  }}
                  onEndReached={() => setPage((p) => p + 1)}
                />
              )}
            </EventListWrapper>
          </View>
        </View>
      </HomeWrapper>
    </MainWrapper>
  );
};

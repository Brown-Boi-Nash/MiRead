import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";

import { Button, Icon, Input } from "../components";
import { Images, Theme } from "../constants";

const { width, height } = Dimensions.get("screen");

class Login extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.background}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <ScrollView>
                <Block flex>
                  <Block flex={0.17} middle>
                    <Text color="#8898AA" size={20}>
                      Login the classic way
                    </Text>
                  </Block>
                  <Block flex center>
                    <KeyboardAvoidingView
                      style={{ flex: 1 }}
                      behavior="padding"
                      enabled
                    >
                      <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                        <Input
                          borderless
                          placeholder="Email"
                          iconContent={
                            <Icon
                              size={16}
                              color={Theme.COLORS.ICON}
                              name="ic_mail_24px"
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />
                      </Block>
                      <Block width={width * 0.8}>
                        <Input
                          password
                          borderless
                          placeholder="Password"
                          iconContent={
                            <Icon
                              size={16}
                              color={Theme.COLORS.ICON}
                              name="padlock-unlocked"
                              family="ArgonExtra"
                              style={styles.inputIcons}
                            />
                          }
                        />

                        <Block row style={styles.passwordCheck}>
                          {/* <Block row style={styles.passwordCheck}> */}
                          <Text size={12} color={Theme.COLORS.MUTED}>
                            Not Registered?
                          </Text>
                          <Text
                            bold
                            size={12}
                            color={Theme.COLORS.MiREADCOLOR}
                            onPress={() => navigation.navigate("Account")}
                          >
                            {" "}
                            REGISTER
                          </Text>
                          {/* </Block> */}
                        </Block>
                      </Block>
                      <Block middle>
                        <Button style={styles.createButton}>
                          <Text bold size={14} color={Theme.COLORS.WHITE} onPress={() => navigation.navigate("Home")}>
                            Log in
                          </Text>
                        </Button>
                        {/* <Button color="primary" style={styles.createButton}>
                        <Text bold size={14} color={Theme.COLORS.WHITE}>
                          Sign Up
                        </Text>
                      </Button> */}
                      </Block>

                      <Block flex={0.25} middle style={styles.socialConnect}>
                        <Text color="#8898AA" size={12}>
                          Sign in with
                        </Text>
                        <Block row style={{ marginTop: theme.SIZES.BASE }}>
                          <Button
                            style={{ ...styles.socialButtons, marginRight: 30 }}
                          >
                            <Block row>
                              <Icon
                                name="logo-facebook"
                                family="Ionicon"
                                size={14}
                                color={"black"}
                                style={{ marginTop: 2, marginRight: 5 }}
                              />
                              <Text style={styles.socialTextButtons}>
                                Facebook
                              </Text>
                            </Block>
                          </Button>
                          <Button style={styles.socialButtons}>
                            <Block row>
                              <Icon
                                name="logo-google"
                                family="Ionicon"
                                size={14}
                                color={"black"}
                                style={{ marginTop: 2, marginRight: 5 }}
                              />
                              <Text style={styles.socialTextButtons}>
                                GOOGLE
                              </Text>
                            </Block>
                          </Button>
                        </Block>
                      </Block>
                    </KeyboardAvoidingView>
                  </Block>
                </Block>
              </ScrollView>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.5,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
    paddingTop: 20
  },
  socialConnect: {
    // backgroundColor: Theme.COLORS.WHITE,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: "#8898AA",
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: Theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: Theme.COLORS.MiREADCOLOR,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    backgroundColor: Theme.COLORS.MiREADCOLOR,
    // color: Theme.COLORS.MiREADCOLOR,
    width: width * 0.4,
    marginTop: 25,
    marginRight: 2
  }
});

export default Login;

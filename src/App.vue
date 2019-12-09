<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('CookiebotOnAccept', () => {
      if (window.Cookiebot.consent.preferences) {
        this.$gtm.trackEvent({
          event: 'cookieconsent_preferences'
        })
      }

      if (window.Cookiebot.consent.statistics) {
        this.$gtm.trackEvent({
          event: 'cookieconsent_statistics'
        })
      }

      if (window.Cookiebot.consent.marketing) {
        this.$gtm.trackEvent({
          event: 'cookieconsent_marketing'
        })
      }
    })
  }
}
</script>
<style lang="scss">
#CybotCookiebotDialog {
  opacity: 1;
  top: 0px;
  width: 100% !important;
  transform: none !important;
  height: auto !important;
  box-shadow: none !important;
  border-bottom: 1px solid #000000 !important;
  padding: 0 !important;

  #CybotCookiebotDialogBody {
    max-width: unset;
    padding-right: 30px;
    overflow: hidden;
    padding-left: 30px;

    @screen lg {
      max-width: 66.66667%;
      padding-left: 0;
      padding-right: 0;
    }

    #CybotCookiebotDialogBodyContent {
      padding: 0 !important;

      #CybotCookiebotDialogBodyContentTitle {
        @apply font-first mt-3 mb-0 mx-0;
        font-size: 14px;
        letter-spacing: 0.6px;
        line-height: 30px;
        font-weight: normal;
      }

      #CybotCookiebotDialogBodyContentText {
        @apply font-first mt-3 mb-3;
        font-size: 11px;
        letter-spacing: 0.8px;
        line-height: 16px;
      }
    }

    #CybotCookiebotDialogPoweredbyLink {
      display: none;
    }

    #CybotCookiebotDialogBodyLevelWrapper {
      display: block !important;
      margin-bottom: 20px;

      @screen lg {
        display: flex !important;
        margin-bottom: 30px !important;
      }

      #CybotCookiebotDialogBodyLevelButtonAcceptWrapper {
        display: block;
        float: none;
        margin-bottom: 15px;

        @screen lg {
          display: flex;
          order: 2;
          flex: 0 0 auto;
          width: auto;
          max-width: 100%;
          margin-bottom: 0;
        }

        #CybotCookiebotDialogBodyLevelButtonAccept {
          @apply font-second inline-block p-2 text-center mt-0;
          text-transform: capitalize;
          font-size: 0.938rem;
          line-height: 1.188;
          letter-spacing: 1px;
          border: 1px solid #000000;
          text-decoration: none;
          min-width: 132px;
          border-radius: 1.125rem;
          background-color: #ffffff;
          color: #000000;
          transition: background-color 400ms, color 400ms;

          &:hover {
            background-color: #000000;
            color: #ffffff;

            &:before {
              display: none;
            }
          }

          &:focus {
            outline: none;
          }
        }
      }

      #CybotCookiebotDialogBodyLevelButtons {
        display: block;
        float: none;
        margin-left: 0 !important;
        margin-bottom: 30px;
        width: 100%;

        @screen lg {
          display: flex;
          margin-right: 30px !important;
          line-height: 1.188;
          flex-grow: 1;
          order: 1;
          align-items: center;
          margin-bottom: 0;
          width: auto;
        }

        #CybotCookiebotDialogBodyLevelButtonsTable {
          width: 100% !important;
          margin: 0;
          line-height: inherit;

          #CybotCookiebotDialogBodyLevelButtonsRow {
            line-height: 39px;

            #CybotCookiebotDialogBodyLevelButtonsSelectPane {
              @apply font-first;
              font-size: 11px;
              letter-spacing: 0.8px;
              line-height: 16px;

              .CybotCookiebotDialogBodyLevelButtonWrapper {
                margin-right: 30px;

                &:first-child {
                  opacity: 0.3 !important;
                }

                &:last-child {
                  margin-right: 0;
                }

                input {
                  width: 8px;
                  height: 8px;
                  flex: 0 0 8px;
                  @apply block overflow-hidden border border-solid border-black cursor-pointer z-10;
                  border-radius: 50%;
                  position: absolute;
                  top: 5px !important;
                  opacity: 1;

                  &:after {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    @apply block z-0 w-0 h-0 bg-black opacity-0;
                    border-radius: 50%;
                    transition: all 400ms;
                  }

                  &:checked:after {
                    width: 7px;
                    height: 7px;
                    opacity: 1;
                  }
                }
                label {
                  background-image: none !important;
                  @apply font-first;
                  font-size: 11px;
                  letter-spacing: 0.8px;
                  line-height: 16px;
                  width: 60px;

                  @screen lg {
                    width: auto;
                  }
                }
              }
            }

            #CybotCookiebotDialogBodyLevelDetailsWrapper {
              text-align: right;
              background: #ffffff;
              position: relative;
              width: 100px;

              @screen lg {
                width: auto;
              }

              #CybotCookiebotDialogBodyLevelDetailsButton {
                @apply font-first;
                font-size: 11px;
                letter-spacing: 0.8px;
                line-height: 16px;
                background-image: url('~/png/strokeDown.png');
                outline: none;
                position: absolute;
                bottom: 0;
                left: 0;

                @screen lg {
                  position: relative !important;
                  bottom: unset !important;
                  left: unset !important;
                }

                &.CybotCookiebotDialogBodyLevelDetailsButtonExpanded {
                  background-image: url('~/png/strokeUp.png') !important;
                }
              }
            }
          }
        }
      }
    }

    #CybotCookiebotDialogBodyLevelButtonsSelectPane,
    #CybotCookiebotDialogBodyLevelDetailsWrapper {
      border: none;
      padding: 0;
    }
  }

  #CybotCookiebotDialogDetail {
    #CybotCookiebotDialogDetailBody {
      max-width: 100%;
      width: unset;
      padding-left: 30px;
      padding-right: 30px;

      @screen lg {
        max-width: 66.66667%;
        padding-right: 0;
        padding-left: 0;
      }

      #CybotCookiebotDialogDetailBodyContentTabs {
        width: 100%;
        border-top: 0.5px solid #0000004d;

        a {
          @apply font-first;
          font-size: 11px;
          font-weight: bold;
          letter-spacing: 0.8px;
          line-height: 16px;
          border: none !important;
          padding-top: 15px;
          padding-bottom: 15px;
          padding-right: 30px;
          padding-left: 0;
          background: #ffffff;

          &.CybotCookiebotDialogDetailBodyContentTabsItemSelected {
            text-decoration: underline !important;
          }

          &::before {
            display: none;
          }

          &:first-child {
            width: 50%;
            padding-right: 0;

            @screen lg {
              width: 16.66667%;
            }
          }
        }
      }

      #CybotCookiebotDialogDetailBodyContent {
        border: none !important;
        height: auto;

        #CybotCookiebotDialogDetailBodyContentTextOverview {
          width: 100%;

          #CybotCookiebotDialogDetailBodyContentCookieContainer {
            #CybotCookiebotDialogDetailBodyContentCookieContainerTypes {
              width: 50%;

              @screen lg {
                width: 16.66667%;
              }

              a {
                @apply font-first;
                font-size: 11px;
                letter-spacing: 0.8px;
                line-height: 16px;
                padding-top: 0;
                padding-bottom: 10px;
                padding-left: 0;
                padding-right: 0;
                background: #ffffff !important;
                border: none !important;

                &:before {
                  display: none;
                }

                &:last-child {
                  padding-bottom: 0;
                }

                &.CybotCookiebotDialogDetailBodyContentCookieContainerTypesSelected {
                  text-decoration: underline !important;
                }
              }
            }

            #CybotCookiebotDialogDetailBodyContentCookieContainerTypeDetails {
              padding-top: 0;
              padding-right: 0;
              padding-left: 0;

              div {
                .CybotCookiebotDialogDetailBodyContentCookieTypeIntro {
                  @apply font-first mb-6;
                  font-size: 11px;
                  letter-spacing: 0.8px;
                  line-height: 16px;
                }

                .CybotCookiebotDialogDetailBodyContentCookieTypeTableContainer {
                  border: none;

                  .CybotCookiebotDialogDetailBodyContentCookieTypeTable {
                    @apply m-0;

                    thead {
                      td,
                      th {
                        background: #ffffff !important;
                        @apply font-first;
                        font-size: 11px;
                        letter-spacing: 0.8px;
                        line-height: 16px;
                        border: none;
                      }

                      tr {
                        border-bottom: 1px solid #000000;
                      }

                      th {
                        padding: 0 100px 10px 0;

                        @screen lg {
                          padding: 0 0 10px 0;
                        }
                      }
                    }

                    tbody {
                      td {
                        @apply font-first;
                        font-size: 11px;
                        letter-spacing: 0.8px;
                        line-height: 16px;
                        border: none;
                        padding-top: 8px;
                        padding-left: 0;
                        padding-right: 0;
                        padding-bottom: 0;
                        word-break: break-word;

                        a {
                          @apply font-first;
                          font-size: 11px;
                          letter-spacing: 0.8px;
                          line-height: 16px;
                          text-decoration: none;
                        }
                      }

                      tr {
                        border: none;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      #CybotCookiebotDialogDetailFooter {
        @apply font-first;
        font-size: 11px;
        letter-spacing: 0.8px;
        line-height: 16px;
        text-align: left;
        color: #000000;
        opacity: 0.3;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 0;

        a {
          font-weight: bold;
          text-decoration: none;
        }
      }
    }

    #CybotCookiebotDialogDetailBodyContentTextAbout {
      @apply font-first;
      font-size: 11px;
      letter-spacing: 0.8px;
      line-height: 16px;
      padding: 0;
      height: auto;

      @screen lg {
        height: 140px;
      }
    }
  }
}
</style>

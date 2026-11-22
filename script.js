const yipCertificateDataUri = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wgARCAGdASwDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB7WMQwQwTASpAAAwQwQ0AADBAANAAAADBDBDAAE8uJPSPND0jzQ9I80PSPND0TzivRPPJfQfmCemeWHqHlh6h5gekeYz0zh6s3QzqqTVMQMEDQMAx4e7hsAAAAADTSM3ES0kWMRQAAEAFPU6sUdCyUWJUVJTILDPSLhgVjw93DYAAabZuOyiVY9BZznQWc50BznQHOdAc50M5ujToWaAE0AOkMhDAAIuLhgVjxd+MY61ONONN9TPUNQAGmCaAAAEMTAATTAAAABDDM0Isi4uGBUZ6kYamggdJpiGhiYgAACagLz0AEAAxFMCCWhxcC1iyLi4YFS0yamoGimJgmCGhoAACagLigApTWcagUCzjVQxwwq5oi4ooTJaZNxcAFIAYgAAaABkzcC0iwTCY0gtNVnj0ZRpfPqNpF1FkVNwMKlpk1NQNFTE8+sdtY7TQCliZZrSdE1MFRYmKjLTONWnQgBNCRMXcWRcXDAqWmTU1DEVhzdPNrHVpzqXrQNYmjgpSXLQrz0BMqc9IjQCgAE0JXMF56EXFwNOpaZNTUAFYcvVzaxtFzL1iprBbRGmWuRqJBcUGemZcaZGonQJgAEW4mgJacNp1LTSampQCsOXq5dY6ajOXsac1nUwaK8zRATpnoGO2BtF5ltFMTAAABiITThtOpaaJpygFYc3Vhvno46ZW08753pROeqBWiNM9Aw3xNs9MjRp0CYJyNw4ppksIbTqWmJpwAUpJ53RQamgG2M6KNIsAqRXnoLLYFnpmWBQ5BqoEUoWmegmA2mS00TTlAKmNTNimWIDTBaVBcsaJJ1zsaClFxFtOkmBIBLINZoQENp1LTE04QRWgmAAJhnSzNKGJORXnoAFGWucW5qlGiTO0DiiV3NCacDTqWmJpxM1FmjTUAAAAAACakV56AmCz0gphQBBNyKaBaZ6CAhtOpaZNS4IhWbvHZQAAAAAAJpGeuWoACi2JhQBAmGaqhUBLki3NVLTJTUclRdk93B3gAoAAAABNBFgAAmAAAAAABmXllUrCMa6NMdt4lp1FTccw3RvnoAAAAAAAGfOdhxh2HGHYcQdpxB2nEHauINFcYt55TVSGs9nRz9Cy0yAuOamUbTQAAAASPCebNEGsgAAAAAAG1yhjEXKNwABpnZ0c/RLLmqi4M2yCy3mRZAWsqzTI5QQbyAAAAADoLzlalqwAAAAAAO3o5+iWKmrACUAAAJpkFqOc6Cuc6A5zoDnOgOc6AwXQHOdBXO9wwNyMDcMDcMDcJsCHzWm5gLuYI6DmR1HKHWcgdZyI7DjDsOIO04Q7jhDuOEO44Q7jgDvfnM//8QAKBAAAQMDBAMAAgMBAQAAAAAAAQACMRAREyAhMDIDEkEUQiIzQFBg/9oACAEBAAEFAv8A2TulyrlXKuVcq5VyrlXKuVcrdXV1fhY2/M/pwhpK2Cnja2u63W63W63W+h/8AXrDCV/FiLi7ka1W43aHf16Q0lWDU7ycrGIDkdod/XUNKDQEXL0c5YisRWIrEViKxFYisRWIrEViKxFN8duZ2h39aDUAAibLdyay3+x2g9ALVDUByHZA35X9W9U7R+tkJA5jDY4jR/VkJ2j4hPM7q2OI0f1b1TtAhCeZ0N0l1tRTk6GwnaBQTzO6tjQ6aE2XsgSt7FHZCE7QKCeZ0NjQ41JK3CBRTl8EJ0VEITzGGxoNJpt7W3DbJyd0b1ToqIQmpdZe4QN9AuuzBFHQNLtRRsndW9U6KiEJr5FdeOK+rScTUKuhul+opydDYToqKCa+Snjj2FbuC9noRR3VsaHTpKIunbNbCdFRQTXyUG7PUWoBYkgULrUMMjQ7UaO6shOiohCa+Wg6fxq72u1rShB7CDDbVDrlO4HboQjFfiE18lB02IpdODShBNiIdDYpfdO4zoEITXyUaLtLQRRoRhvXe6MMqJTuM6BC+18lB19bVLV6GhvcQYaajsncZ0CF9r5FHZCE7QKCeZ0NjQ41JK3CBRTl8EJ0VEITzGGxoNJpt7W3DbJyd0b1ToqIQmpdZe4QN9AuuzBFHQNLtRRsndW9U6KiEJr5FdeOK+rScTUKuhul+opydDYToqKCa+Snjj2FbuC9noRR3VsaHTpKIunbNbCdFRQTXyUG7PUWoBYkgULrUMMjQ7UaO6shOiohCa+Wg6fxq72u1rShB7CDDbVDrlO4HboQjFfiE18lB02IpdODShBNiIdDYpfdO4zoEITXyUaLtLQRRoRhvXe6MMqJTuM6BC+18lB19bVLV6GhvcQYaajsncZ0CF9r5FZN62bX1N/UobCwJbBhpvUd05OTY4DoEL7XyLdDodjQS2EZEGG1EpyKbHAdAhfa+Sg6bVxtJxsQg3uIMNvQwLUcjHCdAhfa+Sg2bc19BfGENgewgw2oO6crXHCdAjT5Fsm39R7Ct7O9yhuHWuIdDKjunIcR0CNPkoLobVA3Q3V6GGRQdk/UYdEN1CNW2kgOPZCLXIgw2v1O1fHI9GRpEaTW9fRpJYwIQQDQw3S62r4dkejBtpEaTSytW7Q4PbZvWhhul2op0HozrpEcf8AH2NghFHQ3S7UU5b+rRtpEcYk7JvWhhul2ne/wo9WwjoEL6jF763NDljF6mG6XoRS1Pjo/UUOgQvqMfeMw22lyEaPjo/RnVHQIX1GOQw3S4X1FFO6s6o6BC+oweQwzS7UYKtdrdgjFRC+nYZAvdqDwTxGG8jroRQwhQQvr+obdBoTO/EYaLc5dVtBC+v6h1l7izO/+guV71LgvGbhCF+xFxiWJN8dj/mJsnPXrQuCJvTwwhC/ZXLjYhX/AJcLnhqylZSspWUrKVlKylZSsrllcsrllcv5OQACLwib6PDCEL9ndRuADYd+Bz0eMAuTWAIvCJJ1eGEIX7L0XqSvXfUSnOtyN8aLwESTweGEIX7cTnW4w0lXDUSTxeGEIVl6heoXqF6heoXqF6ir3W49gib8nhhCOCysrLEFiCxBYgsQWILEFiCxBYgsYWILEFiCxBYgsQWILE1YmrE1YmrE1YmprfWgj/iiP+KPJtkWRZFkWRZFlWVZVlWZZVlWVZlmWZZlmWZZlmWZZ1nWdfkL8hfkL8hfkL8hfkL8hfkL8hfkL8hfkL8hfkFfkFZnL//xAAdEQACAgIDAQAAAAAAAAAAAAABQAARAjEwQVBg/9oACAEDAQE/AfSvhpECalo2oUyqSYExpMaTGku5jpLuY6SJmJSqUlfzNTSVo3xVL9P/xAAhEQABAwMFAQEAAAAAAAAAAAABABARMEBBAhIgITFRUP/aAAgBAgEBPwG/OpA0p5k/ENKhQoUcTqXZUVyYUkoCxIlCzFmLMN0jVy4c1cuHNXLhzVy4c1cuHNXLhgEauXDHV2t1XLhjplRVy4sMuLDLiwy4rkr1xWmfFt4DjK95T8W37S3ICfeUVIH4P//EACsQAAEDAwMCBgMAAwAAAAAAAAABITEQMkERMEAgUAIiUWGR4WBxgXCh4v/aAAgBAQAGPwL8zkkkkkkkkkkknceOSzruPWSSSSSSSd733X5Hl7IzjkoShJJJJJJJJJI/+Bl7MvNRtdleT9EVR9NleQzfs9yKRrtLyHSjJ/NxdpXHngvtLtL68NNleuarp4Sz/fQvHXqUZU96yPSOSvUpL19E9R3p9VnmLqXr0P2VfXUcQXTTq9uSuR0rqi6Kebxa0lur65K4Lk/tV8yoXrRddNlOMupK/FVHWka/zq9qpxlIT5rqRT7q9Uq3GXQ/5qrr8k+L5NOuOSuhC1XyKpZ4hC352J5c9mXVTzeJhj67G6EJR6L2FdVcfxCdk0yQNwHE0H4SjicFNzGxlf3tv1vuQu63JV+S27jssEdkUkdROxrS1xOySSa68hh9v0PKu5gwYMGDBgwYMGKPvXacZh95h1NeJ5hux+w3J99v15cqSSpkyZMmTJkyZMmTJkyZ62/DoIIIIIIIIIIIIIIILS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0hDB//xAApEAABAwIGAgMAAwEBAAAAAAABABExECEgMEFRYXGR8IGhsUBQ8cHh/9oACAEBAAE/IRA/pBQQP6YQP6Y2NtlzPK5nlczyuZ5XM8rmeVzPK5nlcjyuR5XI8oWuSA3JXEnsp258p25TndOd053TndOd053TndOd0S8j/wBUYlANkikvWVwg5RP3rREknJfLfvBBMUympDIZDIZDILNaCknWRxARE904wbZmv4II2VCgpN1i4wIDOfJRTbyXJzCG5QBmQoKTdYCptQG7XFPIVjOMuIuIuIuIuIuIuIuIuIhk5PnQoKTdUKZsoRAkviCB/ACMyFBQXZwgwoSdFrlAGYTHTDAIyZFFSFBQ/hOQOWez3ZMhgEY4UkQz3vSFBQQTIc8mUwi+ARjhSRG4PSFBSD+DC8lDa8YBCE18UE5rICZlAwvSFBSAzY+CZdHxgEIrKsHZFuv3RYcPHbK/QEMB3PIRs/A6Nwu9IUFIDOjVlVrHdjgEIggtQlg5VmwOgoAYudjk2RRIAO1jCgmah2CIBBy3RZd3zgBSD+DDZCeAHWAQjYi3y1CGEbp7N8zOEQ0wfhk1wCXPwVwbOdlEXHyuBQYAUgxAU1xFDG2ALjptsExcsY4bRRdVc9vpRhsAhXluMUEToUYsAKQYhpokwX0XdurMHygYAVJjT2Lu764BC2YoLQgcTE9BWDZsAKQGIaU59CJjJXC81BF2Hl0WEOIPtX6CmsAx0wCEzEgnQLkdItQ9onc74AUgMQ0pjz5QMnbtPP5JCKOhdfRAXJkC4BWpJkIU+FEIrjFCkydt84AUgxCATjb7QAvFhui8adRaUIoVpxtg6CE3dyUwA0J14ct4KC7oHIIidnHWtjFkIQPtkCQYB97sngQcEKCFJMGlMdwmXDBAEQCQyEUY7OHQyI5QMA2T4AR8gprWTnsnyq2QdtRdCEIJEPzlxoKQUkwRCtx4QiApmE331QigAT1XJjtGq+gvmGqDsHlT9KBidKmWS4lkED6/bZcaCkFBLBELXVC4m6IGbjI5NXi54k8bg7UEvoCyjYMp+k8Gd2qJu1u6BWkHLjQUgoJYIhdPtC4iUaLg1V8AhMBE4WLIOgVsPkFCyMhwTByayf59Un8IHFjrgbJhQUgoJYIBHsmXzBBLBLKhde7+ERvE6BcOFffaKGSDp6AwLBg9qhsLCbsgtKeRZfKIUFIKCWCIXhWuhxsrLu8VEgQck0oMAEMooJ+igs3CtK7WViiSzoQLWcy1DuyeAQFw+TCgpBQSwRC8t0jdJe07qJDF46BiLCgM7AgJ1TLBWSflTKJ0rcjyFHhiEZCgZMKCkFBJwRCHArkuifSjk1jbiRTjdbhagCTrBCwi3wpVA91Pd+0bZwHahiJbBCgpBQScEBQCLBAxqkBGB0ZQiAAiCiLsekGa0K0lzvUoPrHooy2/aEYyBYfQIEG4L0MUFIKanAW1T7PpW0RsKlI9rAOzJjYFuxlMIaNEX8Buyjb6U9geCrgbAdVAYQXmwemk3QgYCihCCQO1+GiKOooYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuJCAAEBQin1lE2AwuEAlvhCKGEPo0M+EUkbkeExdJoYoKQU1OCdHZOqShASd0CuE.../2Q==";

const repos = [
  ['AI-mario-APP','AI / web build','https://github.com/Jaidev39/AI-mario-APP'],
  ['page-club-reflections-hub-72','Community / web','https://github.com/Jaidev39/page-club-reflections-hub-72'],
  ['advanced-website','Web development','https://github.com/Jaidev39/advanced-website'],
  ['AI-PING-PONG','Computer vision / game','https://github.com/Jaidev39/AI-PING-PONG'],
  ['AI-MARIO-GAME','AI / game','https://github.com/Jaidev39/AI-MARIO-GAME'],
  ['AI-OBJECT-FINDER','Computer vision','https://github.com/Jaidev39/AI-OBJECT-FINDER'],
  ['AI-VIDEO-SURVIENCE','Computer vision','https://github.com/Jaidev39/AI-VIDEO-SURVIENCE'],
  ['AI-BABY-MONINTERING-APP','Computer vision / monitoring','https://github.com/Jaidev39/AI-BABY-MONINTERING-APP'],
  ['Real-Time-Image-Detection','Computer vision','https://github.com/Jaidev39/Real-Time-Image-Detection'],
  ['Real-Time-Object-Identification','Computer vision','https://github.com/Jaidev39/Real-Time-Object-Identification'],
  ['OBJECT-DETECTION-ON-IMAGES','Computer vision','https://github.com/Jaidev39/OBJECT-DETECTION-ON-IMAGES'],
  ['OBJECT-DETECTOR','Computer vision','https://github.com/Jaidev39/OBJECT-DETECTOR'],
  ['AI-DJ-','AI / creative app','https://github.com/Jaidev39/AI-DJ-'],
  ['AI-DJ-APP','AI / audio','https://github.com/Jaidev39/AI-DJ-APP'],
  ['AI-DJ-MUSIC-WEB-APP','AI / web app','https://github.com/Jaidev39/AI-DJ-MUSIC-WEB-APP'],
  ['FONT-MAINPULATOR','Creative coding','https://github.com/Jaidev39/FONT-MAINPULATOR'],
  ['realTimeDrawing','Creative coding','https://github.com/Jaidev39/realTimeDrawing'],
  ['REAL-TIME-DRAWING','Creative coding','https://github.com/Jaidev39/REAL-TIME-DRAWING'],
  ['FONT-MANIPULATER','Creative coding','https://github.com/Jaidev39/FONT-MANIPULATER'],
  ['CASE-STUDY','Analysis / case study','https://github.com/Jaidev39/CASE-STUDY'],
  ['real-time-image-identification-using-mobile-net','MobileNet / CV','https://github.com/Jaidev39/real-time-image-identification-using-mobile-net'],
  ['real-time-image-identification-app','Real-time CV app','https://github.com/Jaidev39/real-time-image-identification-app'],
  ['REAL-TIME-IMAGE-IDENTIFIER','Computer vision','https://github.com/Jaidev39/REAL-TIME-IMAGE-IDENTIFIER'],
  ['FILTER-WEB-APP-JAIDEV','Web / camera filters','https://github.com/Jaidev39/FILTER-WEB-APP-JAIDEV'],
  ['Filter-web-app','Web / camera filters','https://github.com/Jaidev39/Filter-web-app'],
  ['filter-app','Web / camera filters','https://github.com/Jaidev39/filter-app']
];

const proofItems = [
  {title:'GQMC', subtitle:'Silver Honour', description:'International final-round recognition with a Silver Honour, placing among the top 1% of participants.', image:'assets/evidence/gqmc-2026-silver-honour.jpg', document:'assets/evidence/gqmc-2026-silver-honour.jpg'},
  {title:'YIP / IIT Kharagpur', subtitle:'4th Place · Certificate of Appreciation', description:'Young Innovators Program 2023 certificate of appreciation from IIT Kharagpur. The certificate records active participation and contribution; the 4th-place result is documented separately in the application record.', image:yipCertificateDataUri, document:yipCertificateDataUri, linkLabel:'VIEW YIP CERTIFICATE ↗'},
  {title:'NUS AI Internship', subtitle:'AI / Data Analytics · Faculty recommendation', description:'Built a churn-prediction pipeline across 7 models with a 26.5% baseline, 0.846 ROC-AUC, and 1,525 at-risk customers flagged, backed by direct NUS faculty recommendation.', image:null, document:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf', linkLabel:'OPEN FACULTY RECOMMENDATION ↗'},
  {title:'Plaksha YDS', subtitle:'1st Prize', description:'Young Data Scientists recognition for applied work in data science and quantitative analysis.', image:'assets/evidence/plaksha-yds-certificate.jpg', document:'assets/evidence/plaksha-yds-certificate.jpg'},
  {title:'Pan IIT Summit', subtitle:'Certificate of Appreciation', description:'Recognition in quantum, AI, and semiconductor conversations and public research-oriented engagement.', image:'assets/evidence/pan-iit-summit-2026-certificate.png', document:'assets/evidence/pan-iit-summit-2026-certificate.png'},
  {title:'Independent Research', subtitle:'2 research papers', description:'Applied ML and RL work across adversarial stress testing and liquidity-aware trade execution research.', image:null, document:'research/liquidity-weighted-optimal-trade-execution.pdf'}
];

const researchItems = [
  {
    title:'Automated Adversarial Stress Testing Using Generative Adversarial Networks for Dynamic Risk Scenario Synthesis',
    area:'Generative AI · Financial Risk',
    summary:'Builds a three-part framework for scenario generation, adversarial stress amplification, and risk propagation using historical financial indicators to synthesize severe, previously unobserved risk states.',
    methods:'GAN scenario generation · adversarial perturbation · systemic risk modeling',
    findings:'Dynamic stress scenarios expand the risk surface and strengthen scenario testing in simulated high-stress conditions.',
    contribution:'Framed the architecture and experiments for dynamic adversarial stress synthesis.',
    document:'research/automated-adversarial-stress-testing.docx',
    preview:null,
    articleUrl:'https://ijcsmc.com/docs/papers/March2026/V15I3202609.pdf',
    journalUrl:'https://ijcsmc.com/index.php/volume-15-issue-3-march-2026/'
  },
  {
    title:'Reinforcement Learning for Liquidity-Weighted Optimal Trade Execution Strategies',
    area:'Reinforcement Learning · Trade Execution',
    summary:'Introduces a liquidity-weighted execution framework using order-book imbalance, market impact, slippage, and execution risk for policy learning in quantitative trading.',
    methods:'Policy learning · liquidity-aware reward · trade optimization',
    findings:'Execution quality improves when the policy accounts for liquidity dynamics and market impact in real trading environments.',
    contribution:'Designed the trade-execution framing and quantitative experiment structure for the study.',
    document:'research/liquidity-weighted-optimal-trade-execution.pdf',
    preview:null,
    articleUrl:'https://www.propulsiontechjournal.com/index.php/journal/article/view/10595',
    journalUrl:'https://propulsiontechjournal.com/index.php/journal/issue/view/33'
  }
];

const recommendationItems = [
  {
    title:'NUS AI Internship',
    subtitle:'Faculty Recommendation',
    image:null,
    pdf:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf',
    docx:'assets/recommendations/NUS-Faculty-Recommendation-Editable.docx'
  },
  {
    title:'HEAL',
    subtitle:'Recommendation',
    image:null,
    pdf:'assets/recommendations/HEAL Letter.pdf',
    docx:'assets/recommendations/HEAL-Recommendation-Editable.docx'
  }
];

const certificateItems = [
  {title:'Certificate 01', description:'Recognition artifact', image:'assets/evidence/certificate-01.jpg', document:'assets/evidence/certificate-01.jpg'},
  {title:'Certificate 02', description:'Academic recognition', image:'assets/evidence/certificate-02.jpg', document:'assets/evidence/certificate-02.jpg'},
  {title:'Certificate 03', description:'Competitive achievement', image:'assets/evidence/certificate-03.jpg', document:'assets/evidence/certificate-03.jpg'},
  {title:'Certificate 04', description:'Project recognition', image:'assets/evidence/certificate-04.jpg', document:'assets/evidence/certificate-04.jpg'},
  {title:'Certificate 05', description:'Technical recognition', image:'assets/evidence/certificate-05.jpg', document:'assets/evidence/certificate-05.jpg'},
  {title:'Certificate 06', description:'Research or program certificate', image:'assets/evidence/certificate-06.jpg', document:'assets/evidence/certificate-06.jpg'},
  {title:'Certificate 07', description:'Participation and achievement', image:'assets/evidence/certificate-07.jpg', document:'assets/evidence/certificate-07.jpg'},
  {title:'Model United Nations', description:'MUN certificate', image:'assets/evidence/certificate-08.jpg', document:'assets/evidence/certificate-08.jpg'},
  {title:'Certificate 09 / Plaksha YDS', description:'Young Data Scientists certificate · 1st Prize', image:'assets/evidence/certificate-09.jpg', document:'assets/evidence/certificate-09.jpg'},
  {title:'YIP 2023', description:'IIT Kharagpur Certificate of Appreciation', image:yipCertificateDataUri, document:yipCertificateDataUri},
  {title:'Pan IIT Summit', description:'Certificate of appreciation', image:'assets/evidence/pan-iit-summit-2026-certificate.png', document:'assets/evidence/pan-iit-summit-2026-certificate.png'},
  {title:'Plaksha YDS', description:'1st Prize certificate', image:'assets/evidence/plaksha-yds-certificate.jpg', document:'assets/evidence/plaksha-yds-certificate.jpg'},
  {title:'GQMC Silver Honour', description:'International finalist recognition', image:'assets/evidence/gqmc-2026-silver-honour.jpg', document:'assets/evidence/gqmc-2026-silver-honour.jpg'}
];

const mediaItems = [
  'assets/media/drive-photo-archive/drive-photo-01.jpg',
  'assets/media/drive-photo-archive/drive-photo-02.jpg',
  'assets/media/drive-photo-archive/drive-photo-03.jpg',
  'assets/media/drive-photo-archive/drive-photo-04.jpg',
  'assets/media/drive-photo-archive/drive-photo-05.jpg',
  'assets/media/drive-photo-archive/drive-photo-06.jpg',
  'assets/media/drive-photo-archive/drive-photo-07.jpg',
  'assets/media/drive-photo-archive/drive-photo-08.jpg',
  'assets/media/drive-photo-archive/drive-photo-09.jpg',
  'assets/media/drive-photo-archive/drive-photo-10.jpg',
  'assets/media/drive-photo-archive/drive-photo-11.jpg',
  'assets/media/drive-photo-archive/drive-photo-12.jpg',
  'assets/media/drive-photo-archive/drive-photo-13.jpg',
  'assets/media/drive-photo-archive/drive-photo-14.jpg',
  'assets/media/drive-photo-archive/drive-photo-15.jpg',
  'assets/media/drive-photo-archive/drive-photo-16.jpg',
  'assets/media/drive-photo-archive/drive-photo-17.jpg',
  'assets/media/drive-photo-archive/drive-photo-18.jpg',
  'assets/media/drive-photo-archive/drive-photo-19.jpg',
  'assets/media/drive-photo-archive/drive-photo-20.png',
  'assets/media/drive-photo-archive/drive-photo-21.jpg',
  'assets/media/drive-photo-archive/drive-photo-22.jpg',
  'assets/media/drive-photo-archive/drive-photo-23.jpg',
  'assets/media/drive-photo-archive/drive-photo-24.jpg',
  'assets/media/drive-photo-archive/drive-photo-25.jpg',
  'assets/media/drive-photo-archive/drive-photo-26.jpg',
  'assets/media/drive-photo-archive/drive-photo-27.jpg',
  'assets/media/drive-photo-archive/drive-photo-28.jpg',
  'assets/media/drive-photo-archive/drive-photo-29.jpg',
  'assets/media/drive-photo-archive/drive-photo-30.jpg',
  'assets/media/video-stills/headboy-ceremony-02.jpg',
  'assets/media/video-stills/headboy-ceremony-03.jpg',
  'assets/media/video-stills/headboy-ceremony-05.jpg',
  'assets/media/video-stills/headboy-ceremony-05.jpg'
];

const modal = document.getElementById('image-modal');
const modalImage = document.getElementById('modal-image');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');
let currentGallery = [];
let currentIndex = 0;

function openModal(imageSet, index = 0) {
  currentGallery = imageSet;
  currentIndex = index;
  modalImage.src = currentGallery[currentIndex];
  modal.classList.add('open');
}

function closeModal() {
  modal.classList.remove('open');
}

function renderPreviewImage(item) {
  if (item && item.image && /\.(png|jpe?g|gif|webp|svg)$/i.test(item.image)) {
    return `<img src="${item.image}" alt="${item.title} preview" loading="lazy">`;
  }
  return `<div class="document-preview"><span>${item ? item.title : 'Document'}<br>Read document</span></div>`;
}

function renderProof() {
  const grid = document.getElementById('proof-grid');
  grid.innerHTML = proofItems.map(item => `
    <article class="proof-card">
      <span class="proof-tag">${item.title}</span>
      <h3>${item.subtitle}</h3>
      <p>${item.description}</p>
      ${renderPreviewImage(item)}
      <a href="${item.document}" target="_blank" rel="noopener">${item.linkLabel || 'VIEW EVIDENCE ↗'}</a>
    </article>
  `).join('');
}

function renderResearch() {
  const grid = document.getElementById('research-grid');
  grid.innerHTML = researchItems.map(item => `
    <article class="research-card">
      <div class="paper-index">${researchItems.indexOf(item)+1}</div>
      <span class="meta-tag">${item.area}</span>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <div class="detail-list">
        <div><strong>Methods:</strong> ${item.methods}</div>
        <div><strong>Verified findings:</strong> ${item.findings}</div>
        <div><strong>Contribution:</strong> ${item.contribution}</div>
      </div>
      ${item.preview ? `<img src="${item.preview}" alt="${item.title} preview" loading="lazy">` : `<div class="document-preview"><span>${item.title}<br>Research paper</span></div>`}
      <div class="paper-actions">
        <a href="${item.document}" target="_blank" rel="noopener">READ PAPER ↗</a>
        <a href="${item.articleUrl}" target="_blank" rel="noopener">JOURNAL ARTICLE ↗</a>
        <a href="${item.journalUrl}" target="_blank" rel="noopener">JOURNAL ISSUE ↗</a>
      </div>
    </article>
  `).join('');
}

function renderRecommendations() {
  const grid = document.getElementById('recommendation-grid');
  grid.innerHTML = recommendationItems.map(item => `
    <article class="recommendation-card">
      <span class="recommendation-tag">${item.title}</span>
      <h3>${item.subtitle}</h3>
      ${item.image ? `<img src="${item.image}" alt="${item.title} recommendation preview" loading="lazy">` : `<div class="document-preview"><span>${item.title}<br>${item.subtitle}</span></div>`}
      <div class="recommendation-actions">
        <a href="${item.pdf}" target="_blank" rel="noopener">OPEN PDF ↗</a>
        <a href="${item.docx}" target="_blank" rel="noopener">OPEN DOCX ↗</a>
      </div>
    </article>
  `).join('');
}

function renderFeaturedEvidence() {
  const el = document.getElementById('featured-evidence');
  const featured = [
    {title:'GQMC Silver Honour', image:'assets/evidence/gqmc-2026-silver-honour.jpg', doc:'assets/evidence/gqmc-2026-silver-honour.jpg'},
    {title:'YIP / IIT Kharagpur', image:yipCertificateDataUri, doc:yipCertificateDataUri, label:'VIEW YIP CERTIFICATE ↗', note:'YIP 2023 Certificate of Appreciation from IIT Kharagpur.'},
    {title:'NUS AI Internship', image:null, doc:'assets/recommendations/LOR_Group1_Avirineni_Jaidev_Chowdary (1).pdf', label:'OPEN FACULTY RECOMMENDATION ↗', note:'Direct faculty recommendation evidence.'},
    {title:'Plaksha YDS', image:'assets/evidence/plaksha-yds-certificate.jpg', doc:'assets/evidence/plaksha-yds-certificate.jpg'},
    {title:'Pan IIT Summit', image:'assets/evidence/pan-iit-summit-2026-certificate.png', doc:'assets/evidence/pan-iit-summit-2026-certificate.png'}
  ];
  el.innerHTML = featured.map(item => `
    <article class="evidence-feature">
      ${item.image ? `<img src="${item.image}" alt="${item.title} evidence preview" loading="lazy">` : `<div class="document-preview"><span>${item.title}<br>Faculty recommendation</span></div>`}
      <div class="feature-copy">
        <span class="meta-tag">FEATURED EVIDENCE</span>
        <h3>${item.title}</h3>
        <p>${item.note || 'Direct proof for the claim and corresponding achievement.'}</p>
        <a href="${item.doc}" target="_blank" rel="noopener">${item.label || 'VIEW EVIDENCE ↗'}</a>
      </div>
    </article>
  `).join('');
}

function renderCertificates() {
  const el = document.getElementById('certificate-grid');
  el.innerHTML = certificateItems.map(item => `
    <article class="certificate-card">
      <img src="${item.image}" alt="${item.title} preview" loading="lazy">
      <h4>${item.title}</h4>
      <div class="card-meta">${item.description}</div>
      <a href="${item.document}" target="_blank" rel="noopener">VIEW CERTIFICATE ↗</a>
    </article>
  `).join('');
}

function renderMediaGrid() {
  const el = document.getElementById('media-grid');
  el.innerHTML = mediaItems.map((src, index) => `
    <article class="media-card">
      <img src="${src}" alt="Portfolio media asset ${index + 1}" loading="lazy" data-index="${index}">
      <div class="media-caption">Media asset ${index + 1}</div>
    </article>
  `).join('');
  el.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openModal(mediaItems, Number(img.dataset.index)));
  });
}

function renderRepos(filter = '') {
  const grid = document.getElementById('repo-grid');
  const q = filter.trim().toLowerCase();
  grid.innerHTML = repos.filter(([name, desc]) => `${name} ${desc}`.toLowerCase().includes(q)).map(([name, desc, url]) => `
    <article class="repo-card">
      <div>
        <h3>${name}</h3>
        <p>${desc}</p>
      </div>
      <a href="${url}" target="_blank" rel="noopener">Open on GitHub ↗</a>
    </article>
  `).join('');
}

function bindModal() {
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
    if (event.key === 'ArrowLeft' && modal.classList.contains('open')) {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
    if (event.key === 'ArrowRight' && modal.classList.contains('open')) {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
  });
  prevButton.addEventListener('click', () => {
    if (currentGallery.length) {
      currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
  });
  nextButton.addEventListener('click', () => {
    if (currentGallery.length) {
      currentIndex = (currentIndex + 1) % currentGallery.length;
      modalImage.src = currentGallery[currentIndex];
    }
  });
}

function bindMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  menuToggle.addEventListener('click', () => {
    const expanded = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(expanded));
  });
  nav.querySelectorAll('a').forEach((anchor) => anchor.addEventListener('click', () => nav.classList.remove('open')));
}

function bindEvidenceTiles() {
  document.querySelectorAll('.certificate-card img, .proof-card img, .recommendation-card img, .evidence-feature img').forEach((img) => {
    img.addEventListener('click', () => {
      const src = img.getAttribute('src');
      openModal([src], 0);
    });
  });
}

function init() {
  const yipLink = document.getElementById('yip-certificate-link');
  if (yipLink) {
    yipLink.href = yipCertificateDataUri;
    yipLink.target = '_blank';
    yipLink.rel = 'noopener';
  }
  renderProof();
  renderResearch();
  renderRecommendations();
  renderFeaturedEvidence();
  renderCertificates();
  renderMediaGrid();
  renderRepos();
  bindModal();
  bindMenu();
  bindEvidenceTiles();
  document.getElementById('repo-search').addEventListener('input', (e) => renderRepos(e.target.value));
}

init();

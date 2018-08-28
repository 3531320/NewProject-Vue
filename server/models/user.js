var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var takenQuizzesSubSchema = new Schema({
  quiz: {type: Schema.Types.ObjectId, ref: "quizModel"},
  score: {type: Number, default: 0},
  date: {type: Date, default: Date.now},
  passed: Boolean
}, {
  _id: false
});

var passedModulesSubSchema = new Schema({
  module: {type: Schema.Types.ObjectId, ref: "classModuleModel"},
  date: {type: Date, default: Date.now}
}, {
  _id: false
});

var starRatingsSubSchema = new Schema({
  dateOfLatestStar:{type: Date, default: Date.now},
  module: {type: Schema.Types.ObjectId, ref: "moduleModel"},
  starRating: {type: Number, default: 0}
}, {
  _id: false
});

var userSchema = new Schema({
    prid: { type: String, default: "", index: true },//K账号 kgcc606
    chineseName: {type: String, default: ""},
    englishName: {type: String, default: ""},
    lmPrid: {type: String, default: ""}, //直线经理的K账号
    email: String, // coming from old system , do not change it
    phoneNumber: {type: String, default: ""},
    extensionNumber: {type: String, default: ""},
    salType: {type: String, default: ""},
    employeeId: {type: String, default: ""},//员工号
    userType: {type: String, default: ""},//REP DSM  RSM RSD
    payGroup: {type: String, default: ""},
    positionNumber: {type: String, default: ""},
    positionTitleCN: {type: String, default: ""},
    positionTitleEN: {type: String, default: ""},
    orgUnitID: {type: String, default: ""},
    orgUnitDescCN: {type: String, default: ""},
    orgUnitDescEN: {type: String, default: ""},
    teamCode: {type: String, default: ""},
    teamDesc: {type: String, default: ""},
    regionCode: {type: String, default: ""},
    regionDesc: {type: String, default: ""},
    regionCenterCode: {type: String, default: ""},
    regionCenterDesc: {type: String, default: ""},
    bu: {type: String, default: ""},//部门
    tag: {type: String, default: ""},

    rsdEmployeeId: {type: String, default: ""},
    rsdName: {type: String, default: ""},
    rsdEmail: {type: String, default: ""},

    rsmEmployeeId: {type: String, default: ""},
    rsmName: {type: String, default: ""},
    rsmEmail: {type: String, default: ""},

    rsaEmployeeId: {type: String, default: ""},
    rsaName: {type: String, default: ""},
    rsaEmail: {type: String, default: ""},

    dsmEmployeeId: {type: String, default: ""},
    dsmName: {type: String, default: ""},
    dsmEmail: {type: String, default: ""},

    positionEnteryDate: {type: Date, default: Date.now},//任命时间
    lineManagerPsID: {type: String, default: ""}, //直线经理员工号

    productFamilyCode1: {type: String, default:""},
    productFamilyDesc1: {type: String, default:""},
    productFamilyCode2: {type: String, default:""},
    productFamilyDesc2: {type: String, default:""},
    productFamilyCode3: {type: String, default:""},
    productFamilyDesc3: {type: String, default:""},
    productFamilyCode4: {type: String, default:""},
    productFamilyDesc4: {type: String, default:""},
    productFamilyCode5: {type: String, default:""},
    productFamilyDesc5: {type: String, default:""},
    productFamilyCode6: {type: String, default:""},
    productFamilyDesc6: {type: String, default:""},
    productFamilyCode7: {type: String, default:""},
    productFamilyDesc7: {type: String, default:""},
    productFamilyCode8: {type: String, default:""},
    productFamilyDesc8: {type: String, default:""},
    productFamilyCode9: {type: String, default:""},
    productFamilyDesc9: {type: String, default:""},
    productFamilyCode10: {type: String, default:""},
    productFamilyDesc10: {type: String, default:""},

    startDate: {type: Date, default: Date.now},//入职时间
    salesFlag: {type: String, default: ""},
    gender: {type: String, default: "male"}, // coming from old system , do not change it

    psdPrID: {type: String, default: ""},
    psmPrID: {type: String, default: ""},
    psaPrID: {type: String, default: ""},
    dsmPrID: {type: String, default: ""},

    psdPhoneNum: {type: String, default: ""},
    psmPhoneNum: {type: String, default: ""},
    psaPhoneNum: {type: String, default: ""},
    dsmPhoneNum: {type: String, default: ""},

    username: {type: String, default: this.prid},  // coming from old system, do not change it
    roleName: {type: String, default: "role1"}, // there is a another field ( which is a obj type not a string )called role in old system, to avoid conflict, change into roleName
    status: {type: Number, default: 0},//0正常 1禁用
    classes: {type: Object, default: {}},
    records: {type: Object, default: {}},
    // following fields are existing data, please do not delete, if they are standing for the same meaning as above, please replace the above
    // and do not change the order above

    OrgName: {type: String, default: ""},
    NTID: {type: String, default: ""},
    firstName: {type: String, default: ""},
    lastName: {type: String, default: ""},
    avatar: {
      headItem: String,
      headColour: Number,
      hairItem: String,
      hairColour: Number,
      eyesColour: Number,
      bodyItem: String,
      bodyColour: Number,
      eyesItem: String,
      gender: String,
      accessoryItem: String
    },
    badges: {type: Array, default: []},//勋章
    fullname: {type: String, default: this.chineseName,index:true},
    brands: [],
    created: {type: Date, default: Date.now,index:true},//入库时间
    updated: {type: Date, default: Date.now},
    scores: {
      updated: {type: Date, default: Date.now},
      lastAdded:{type:Array, default: []},
      guid:{type: String, default: ""},
      scores: {
        type: Array
      },
      total: {type: Number, default: 0}
    },
    modules: {
      updated: {type: Date, default: Date.now},
      modules: [
        {
          id: {type: Schema.Types.ObjectId, ref: "moduleModel"},
          status: {type: Number, default: 0},
          lastDownloaded: {type: Date, null: true}
        }
      ],
      mostPopular: {
        mandatory: [],
        nonMandatory: []
      }
    },
    connections: [
      {type: Schema.Types.ObjectId, ref: "connectionModel"}
    ],
    lastLogin: {type: Date, default: Date.now},
    thumbnail: {
      type: String,
      default: "/assets/img/avatar-thumbnail-male.png"
    },
    fullbodythumb: {
      type: String,
      default: "/assets/img/avatar-fullbodythumb-male.png"
    },
    modulesUnlocked: [
      {type: Schema.Types.ObjectId, ref: "moduleModel"}
    ],
    branches: [
      {type: Schema.Types.ObjectId, ref: "branchModel"}
    ],
    alignmentCode: { type: String, default: ""},
    channel: { type: String, default: ""},
    loginName: { type: String, default: ""},
    marketCompanyCode: { type: String, default: ""},
    openPosition: { type: String, default: ""},
    parentPosition: { type: String, default: ""},
    positionDescription: { type: String, default: ""},
    positionId: { type: String, default: ""},
    primaryRepFlag: { type: String, default: ""},
    role: { type: Schema.Types.ObjectId, ref: 'roleModel'},
    roleCategory: { type: String, default: ""},
    accessToken: { type: String, default: ""},
    refreshToken: { type: String, default: ""},
    passedModules: {
      type: [passedModulesSubSchema],
      defaults: []
    },
    quizAttempts: {
      type: [takenQuizzesSubSchema],
      default: []
    },
    level: {type: Number, default: 0},
    local: {type: String, default: "zh"},
    syncSession: {type: String, default: ""},
    cmsAccess: {type: Boolean, default: false},
    angelAdmin: {type: Boolean, default: false},
    l1Admin: {type: Boolean, default: false},
    DMOrgName: {type: String},
    RSDOrgName: {type: String},
    version: {type: Number, default: 0},
    versionHash: {type: String, default: ''},
    starRatings: {
      type: [starRatingsSubSchema],
      default: []
    },
    bookmarks: [
      {
        "_id": {type: Schema.Types.ObjectId, ref: "classesContentModel"},
        "module": {type: Schema.Types.ObjectId, ref: "classesModuleModel"}
      }
    ],
    dateOfLatestStar: {type: Date},
    accessDraftModule: {type: Boolean, default: false},
    hasPulled: {type: Boolean, default: false},
    trainer: {type: Boolean, default: false},
    city: {type: String, default: ""},
    type: {type: Number, default: 0}, //0 default (imported); 1 created by CMS
    loginTimes: {type: Number, default: 0},
    careerLevel: { type: String, default: "" },
    contentMark: [{"_id": {type: Schema.Types.ObjectId, ref: "classesContentModel"}}],// classContent messages
    evaAdmin: {type: Boolean, default: false}, //360能力评估管理员
    ouLevel1Code: {type: String, default: "", trim: true},
    ouLevel1Desc: {type: String, default: "", trim: true},
    ouLevel2Code: {type: String, default: "", trim: true},
    ouLevel2Desc: {type: String, default: "", trim: true},
    ouLevel3Code: {type: String, default: "", trim: true},
    ouLevel3Desc: {type: String, default: "", trim: true},
    ouLevel4Code: {type: String, default: "", trim: true},
    ouLevel4Desc: {type: String, default: "", trim: true},
    ouLevel5Code: {type: String, default: "", trim: true},
    ouLevel5Desc: {type: String, default: "", trim: true},
    ouLevel6Code: {type: String, default: "", trim: true},
    ouLevel6Desc: {type: String, default: "", trim: true},
    maGroup: { type: Boolean, default: false },
    maTA: { type: String, default: "", trim: true },
    maTeam: { type: String, default: "", trim: true },
    maRole: { type: String, default: "", trim: true },
    lmName: { type: String, default: "", trim: true }, // 非来自EDW，由lmPrid查询获得
    societyId:{type:String,default:""}

    //avatar: {
    //        accessoryItem: {type: String, default: "deblank"},
    //        bodyColour: {type: Number, default: 15},
    //        bodyItem: {type: String, default: "maleVest"},
    //        eyesColour: {type: Number, default: 48},
    //        eyesItem: {type: String, default: "maleEyes1"},
    //        gender: {type: String, default: "male"},
    //        hairColour: {type: Number, default: 4},
    //        hairItem: {type: String, default: "maleHairCurly"},
    //        headColour: {type: Number, default: 45},
    //        headItem: {type: String, default: "maleHeadNormal"}
    //    }
  },
  {
    collection: "users"
  });

userSchema.pre("save", function (next) {
  var user = this,
    version = user.version;
  user.version = version + 1;
  user.updated = Date.now();
  user.versionHash = Math.random().toString(36).substring(7);
  next();
});

module.exports = mongoose.model("userModel", userSchema);

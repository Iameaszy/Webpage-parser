import * as WebpageParser_service from "./WebpageParser.service"
import * as Puppeteer from "../../adapters/puppeteer/Puppeteer"

// @ponicode
describe("parse", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new Puppeteer.PuppeteerAdapter(undefined, undefined)
        inst2 = new WebpageParser_service.webpageParserService(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.parse("https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst2.parse("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst2.parse("www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst2.parse("http://base.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst2.parse("Www.GooGle.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst2.parse("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

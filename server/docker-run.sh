docker run --rm --name test-cpn-sign1 -d -p 9000:9000 -v "$(pwd)":/src test-cpn-sign-api && docker logs -f test-cpn-sign1
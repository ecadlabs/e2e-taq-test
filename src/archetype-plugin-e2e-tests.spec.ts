import { exec as exec1 } from 'child_process';
import utils from 'util';
const exec = utils.promisify(exec1);
import { prepareEnvironment } from '@gmrchk/cli-testing-library';

describe('Archetype Plugin E2E Testing for Taqueria CLI', () => {
	
	jest.setTimeout(60000);

	test('compile will error if no contract parameter passed and no contract exists', async () => {
		const { execute, cleanup, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const { stdout } = await execute('taq', 'compile', './test-project');
		expect(stdout).toEqual(expect.arrayContaining(['│ None found │ N/A      │']));

		await cleanup();
	});

	test('archetype plugin will support cli options', async () => {
		const { execute, cleanup, spawn } = await prepareEnvironment();
		const { waitForText } = await spawn('taq', 'init test-project --debug');
		await waitForText("Project taq'ified!");

<<<<<<< HEAD
		const { stdout } = await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		const { stdout } = await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		expect(stdout).toContain('Plugin installed successfully');

		const { stdout: stdout2, stderr } = await execute('taq', '--version', './test-project');
		expect(stderr).toEqual([]);
		expect(stdout2).not.toEqual([]);

		const { stdout: stdout3, stderr: stderr2 } = await execute('taq', '--build', './test-project');
		expect(stderr2).toEqual([]);
		expect(stdout3).not.toEqual([]);

		await cleanup();
	});

	// this isn't working. should it? should compile find all files in contracts dir?
	// see https://github.com/ecadlabs/taqueria/issues/1678
	// manually confirmed to fail in pre-release v0.25.23-rc
	test('1678 - compile will compile one contract under contracts folder without a parameter', async () => {
		const { execute, cleanup, writeFile, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const arl_file = await (await exec('cat src/test-data/fa12.arl')).stdout;
		writeFile('./test-project/contracts/fa12.arl', arl_file);

		const { stdout } = await execute('taq', 'compile', './test-project');
		expect(stdout).toEqual(expect.arrayContaining(['│ fa12.arl │ artifacts/fa12.tz │']));

		await exists(`./test-project/artifacts/fa12.tz`);

		await cleanup();
	});

	test('compile will compile one contract with [sourceFile] command', async () => {
		const { execute, cleanup, writeFile, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const arl_file = await (await exec('cat src/test-data/fa12.arl')).stdout;
		writeFile('./test-project/contracts/fa12.arl', arl_file);

		const { stdout, stderr } = await execute('taq', 'compile fa12.arl', './test-project');
		expect(stdout).toEqual(expect.arrayContaining(['│ fa12.arl │ artifacts/fa12.tz │']));

		await exists(`./test-project/artifacts/fa12.tz`);

		await cleanup();
	});

	// blocked by https://github.com/ecadlabs/taqueria/issues/1678
	// manually confirmed to fail in pre-release v0.25.23-rc
	test('1678 - compile will compile multiple contracts in the contracts folder', async () => {
		const { execute, cleanup, writeFile, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const arl_file = await (await exec('cat src/test-data/fa12.arl')).stdout;
		writeFile('./test-project/contracts/fa12.arl', arl_file);
		const animal_file = await (await exec('cat src/test-data/animal_tracking.arl')).stdout;
		writeFile('./test-project/contracts/animal_tracking.arl', animal_file);

		const { stdout } = await execute('taq', 'compile', './test-project');
		expect(stdout).toEqual(expect.arrayContaining(['│ fa12.arl │ artifacts/fa12.tz │']));

		await exists(`./test-project/artifacts/fa12.tz`);
		await exists(`./test-project/artifacts/animal_tracking.tz`);

		await cleanup();
	});

	test('compile will error if named contract does not exist', async () => {
		const { execute, cleanup, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const { stdout } = await execute('taq', 'compile no_such_file.arl', './test-project');
		expect(stdout).toEqual(expect.arrayContaining(['│ no_such_file.arl │ Not compiled │']));

		await cleanup();
	});

	// hangs waiting to execute the image command
	// works fine manually in pre-release v0.25.23-rc
	test.skip('compile can use different versions of the Archetype image', async () => {
		const { execute, cleanup, writeFile, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const { stdout, stderr } = await execute(
			'TAQ_ARCHETYPE_IMAGE=completium/archetype:1.3.5 taq',
			'get-image --plugin archetype',
			'./test-project',
		);
		expect(stdout).toEqual(expect.arrayContaining(['│ completium/archetype:1.3.5 │']));

		const arl_file = await (await exec('cat src/test-data/arch-1.3.5-example.arl')).stdout;
		writeFile('./test-project/contracts/arch-1.3.5-example.arl', arl_file);

		const { stdout: stdout1 } = await execute(
			'taq',
			'compile arch-1.3.5-example.arl',
			'./test-project',
		);
		expect(stdout1).toEqual(expect.arrayContaining(['│ completium/archetype:1.3.5 │']));

		await exists(`./test-project/artifacts/arch-1.3.5-example.tz`);

		await cleanup();
	});

	test('compile will require the plugin argument when other compile plugins are installed', async () => {
		const { execute, cleanup, writeFile, exists } = await prepareEnvironment();
		await execute('taq', 'init test-project');
		await exists('./test-project/.taq/config.json');
<<<<<<< HEAD
		await execute('taq', 'install @taqueria/plugin-archetype', './test-project');
=======
		await execute('taq', 'install @taqueria/plugin-archetype@v0.27.17-rc', './test-project');
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
		await exists('./test-project/node_modules/@taqueria/plugin-archetype/index.js');

		const arl_file = await (await exec('cat src/test-data/fa12.arl')).stdout;
		writeFile('./test-project/contracts/fa12.arl', arl_file);

		const { stdout } = await execute(
			'taq',
<<<<<<< HEAD
			'compile fa12.arl --plugin @taqueria/plugin-archetype',
=======
			'compile fa12.arl --plugin @taqueria/plugin-archetype@v0.27.17-rc',
>>>>>>> 3212583e4535041eb2cb820dd3c4767cec0a6670
			'./test-project',
		);
		expect(stdout).toEqual(expect.arrayContaining(['│ fa12.arl │ artifacts/fa12.tz │']));

		await exists(`./test-project/artifacts/fa12.tz`);

		await cleanup();
	});
});
